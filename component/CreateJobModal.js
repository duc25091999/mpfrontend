import React from "react";
import { Modal, Form, Input, InputNumber,DatePicker } from "antd";
import { useJobAdmin } from "../hook/admin/useJob.admin";
import TextEditor from "./TextEditor";
import moment from "moment";

function CreateJobModal({ visible, setVisible, loadList }) {
  const [form] = Form.useForm();
  const { createJob } = useJobAdmin();
  const handleCancel = () => {
    setVisible(false);
    form.setFieldsValue({
      CompanyName: "",
      JobTitle: "",
      Address: "",
      Area:"",
      Salary: { Min: 0, Max: 0 },
      EndDate: moment(new Date().getDate(),'DD/MM/YYYY'),
      Department: "",
      JobDescription: "",
      Requirement: "",
      Benefit: "",
      Timetable: "",
    });
  };
  const handleOk = () => {
    form.submit();
  };
  const handleSubmit = async (values) => {
      console.log(values);
    const res = await createJob(values);
    if (res.success) {
      setVisible(false);
      form.setFieldsValue({
        CompanyName: "",
        JobTitle: "",
        Address: "",
        Area:"",
        Salary: { Min: 0, Max: 0 },
        EndDate: moment(new Date().getDate(),'DD/MM/YYYY'),
        Department: "",
        JobDescription: "",
        Requirement: "",
        Benefit: "",
        Timetable: "",
      });
      loadList();
    }
  };
  return (
    <Modal
      title="Create job"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        form={form}
        name="create-brand"
        scrollToFirstError
        onFinish={handleSubmit}
      >
        <Form.Item
          name="CompanyName"
          label="Tên công ty"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="JobTitle"
          label="Vị trí công việc"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Area"
          label="khu vực"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Address"
          label="Địa chỉ"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["Salary", "Min"]}
          label="Lương từ"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["Salary", "Max"]}
          label="tới"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="EndDate"
          label="Thời hạn tuyển dụng"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <DatePicker format={"DD/MM/YYYY"}/>
        </Form.Item>
        <Form.Item
          name="Department"
          label="Phòng ban"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="JobDescription"
          label="Mô tả công việc"
        >
          <TextEditor/>
        </Form.Item>
        <Form.Item
          name="Requirement"
          label="Yêu cầu công việc"
        >
          <TextEditor/>
        </Form.Item>
        <Form.Item
          name="Benefit"
          label="Quyền lợi"
        >
          <TextEditor/>
        </Form.Item>
        <Form.Item
          name="Timetable"
          label="Ca làm"
        >
          <TextEditor/>
        </Form.Item>
      </Form>
      
    </Modal>
  );
}

export default CreateJobModal;
