import React, { useEffect } from "react";
import { Button, Form, Input, Row, Col, Spin } from "antd";
import { SearchOutlined, EnvironmentFilled } from "@ant-design/icons";
import styles from "./JobList.module.css";
import { useJobUser } from "../hook/user/useJob.user";
import { useRouter } from "next/router";
import moment from "moment";

const activeJobStyle = {
  marginBottom: 24,
  display: "flex",
  borderRadius: "14px",
  backgroundColor: "rgba(151, 195, 249, 0.48)",
  border: "1px solid #458FF6",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 40px",
  gap: "24px",
  cursor: " pointer",
};

const disableJobStyle = {
  marginBottom: 24,
  display: "flex",
  borderRadius: "14px",
  backgroundColor: "rgba(151, 195, 249, 0.48)",
  border: "1px solid #458FF6",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 40px",
  gap: "24px",
  filter: "grayscale()",
};
function JobList() {
  const router = useRouter();
  const { jobList, getJobList, jobId, setJobId, setJobList } = useJobUser();
  useEffect(() => {
    getJobList();
  }, []);
  const onSearch = async (values) => {
    getJobList(values);
  };
  return (
    <div>
      <div>
        <img
          src="/job-list-banner.png"
          alt="MP Telecom banner"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ display: "flex", marginTop: 60, alignItems: "center" }}>
        <img
          className={styles.map}
          src="/map.png"
          alt="Vietnam map"
          style={{ width: "100%", minWidth: 200, maxWidth: 300 }}
        />
        <div style={{ flex: 1 }}>
          <div>
            <Form onFinish={onSearch}>
              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item name={"JobTitle"}>
                    <Input
                      prefix={<SearchOutlined />}
                      placeholder="Nhập chức vụ, từ khóa"
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name={"Area"}>
                    <Input
                      prefix={<EnvironmentFilled />}
                      placeholder="Khu vực"
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Button
                      icon={<SearchOutlined />}
                      block
                      htmlType="submit"
                      type="primary"
                    >
                      Tìm kiếm
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <div>
            {jobList.loading && <Spin size="large"></Spin>}
            {!jobList.loading &&
              jobList.data.length > 0 &&
              jobList.data.map((item) => (
                <div
                  style={
                    moment().isAfter(item.EndDate)
                      ? disableJobStyle
                      : activeJobStyle
                  }
                  onClick={() => {
                    if (!moment().isAfter(item.EndDate))
                      router.push(`/job/${item._id}`);
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "12px",
                      display: "flex",
                    }}
                  >
                    <img src="/job-icon.png" alt="headset" style={{}} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div>{item.CompanyName}</div>
                    <div>
                      {item.Salary.Min} - {item.Salary.Max} | {item.JobTitle}
                    </div>
                  </div>
                  <div>
                    <div>Vị trí: {item.Area}</div>
                    <div>Cập nhật: {moment(item.createdAt).fromNow()}</div>
                  </div>
                </div>
              ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" onClick={() => router.push("/hiring")}>
                Xem thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobList;
