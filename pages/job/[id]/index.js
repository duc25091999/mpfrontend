import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import TopBar from "../../../component/TopBar";
import {
  Button,
  Spin,
  Divider,
  Form,
  Row,
  Col,
  Input,
  Upload,
  message,
} from "antd";
import Footer from "../../../component/Footer";
import HiringBanner from "../../../component/HiringBanner";
import { useRouter } from "next/router";
import { useJobUser } from "../../../hook/user/useJob.user";
import { urlApi } from "../../../api/api";

const { Dragger } = Upload;
export default function Home() {
  const [uploadFile, setUploadFile] = useState({
    id: "",
    name: "",
  });
  const props = {
    name: "file",
    multiple: false,
    action: `${urlApi}/upload`,
    maxCount: 1,
    beforeUpload: file => {
      const isPDF = file.type === 'application/pdf';
      if (!isPDF) {
        message.error(`${file.name} is not a pdf file`);
      }
      return isPDF;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setUploadFile({
          id: info.file.response.message.id,
          name: info.file.response.message.filename,
        });
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const router = useRouter();
  const { getJobById, job, registerJob } = useJobUser();
  useEffect(() => {
    if (router.query.id) getJobById(router.query.id);
  }, [router.query.id]);
  const onSubmit = (values) => {
    registerJob(router.query.id,{
      ...values,
      CV: uploadFile.name,
    })
  }
  return (
    <>
      <div
        className="content-container"
        style={{
          maxWidth: 1600,
          margin: "auto",
          padding: "0 105px",
        }}
      >
        <TopBar />
        <HiringBanner />
      </div>
      <div
        className="content-container"
        style={{
          maxWidth: 1600,
          margin: "auto",
          padding: "0 150px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        {job.loading && <Spin size="large"></Spin>}
        {!job.loading && (
          <div
            className="job-detail-container"
            style={{ display: "flex", gap: 48 }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#458FF6",
                }}
              >
                {job.data?.CompanyName}
              </div>
              <p style={{ fontWeight: "bold" }}>[ {job.data?.JobTitle}]</p>
              <p>{job.data?.Address}</p>
              <div
                style={{
                  margin: "24px 0",
                  border: "1px solid #2E4E92",
                  borderRadius: "12px",
                  backgroundColor: "#458FF6",
                  padding: 12,
                }}
              >
                <div>
                  Lương: {job.data?.Salary?.Min} - {job.data?.Salary?.Max}
                </div>
                <div>Địa điểm: {job.data?.Address}</div>
                <div>Phòng ban: {job.data?.Department}</div>
                <div>Hạn nộp: {job.data?.EndDate}</div>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Mô tả công việc:</div>
                <div
                  style={{ marginBottom: 32 }}
                  dangerouslySetInnerHTML={{ __html: job.data?.JobDescription }}
                />
                <div style={{ fontWeight: "bold" }}>Yêu cầu:</div>
                <div
                  style={{ marginBottom: 32 }}
                  dangerouslySetInnerHTML={{ __html: job.data?.Requirement }}
                />
                <div style={{ fontWeight: "bold" }}>Quyền lợi:</div>
                <div
                  style={{ marginBottom: 32 }}
                  dangerouslySetInnerHTML={{ __html: job.data?.Benefit }}
                />
                <div style={{ fontWeight: "bold" }}>Thời gian làm việc</div>
                <div
                  style={{ marginBottom: 32 }}
                  dangerouslySetInnerHTML={{ __html: job.data?.Timetable }}
                />
                <Divider dashed />
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  marginBottom: 24,
                }}
              >
                Nộp đơn ứng tuyển công việc này
              </div>
              <Form layout="vertical" onFinish={onSubmit}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Form.Item
                      required
                      name="Name"
                      label={
                        <div style={{ fontWeight: "bold" }}>Họ và tên</div>
                      }
                    >
                      <Input placeholder="Họ và tên bạn" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="Email"
                      required
                      label={
                        <div style={{ fontWeight: "bold" }}>Địa chỉ email</div>
                      }
                    >
                      <Input placeholder="Địa chỉ email" />
                    </Form.Item>
                  </Col>
                  <Col span={24} required>
                    <Form.Item
                      name="Phone"
                      required
                      label={
                        <div style={{ fontWeight: "bold" }}>Số điện thoại</div>
                      }
                    >
                      <Input placeholder="Số điện thoại" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Dragger accept=".pdf" disabled={uploadFile.id !== ""} {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">CV của bạn *</p>
                      <p className="ant-upload-hint">
                        Click để chọn & tải lên CV của bạn
                      </p>
                    </Dragger>
                  </Col>
                  <Col span={24} style={{ marginTop: 48 }}>
                    <Form.Item>
                      <Button htmlType="submit" type="primary">Nộp đơn ứng tuyển</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="job-detail-container-image">
              <div>
                <img style={{ maxWidth: 300 }} src="/map.png" />
              </div>
              <div>
                <img style={{ maxWidth: 300 }} src="/map.png" />
              </div>
              <div>
                <img style={{ maxWidth: 300 }} src="/map.png" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          maxWidth: 2000,
          margin: "auto",
          padding: "0",
          width: "100%",
        }}
      >
        <Footer />
      </div>
    </>
  );
}
