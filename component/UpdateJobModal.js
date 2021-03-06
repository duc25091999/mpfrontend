import React, { useEffect } from "react";
import { Modal, Form, Input, InputNumber, DatePicker } from "antd";
import { useJobAdmin } from "../hook/admin/useJob.admin";
import TextEditor from "./TextEditor";
import moment from "moment";

function UpdateJobModal({ visible, setVisible, loadList, jobId, setJobId }) {
  const [form] = Form.useForm();
  const { getJobById, updateJob } = useJobAdmin();
  useEffect(() => {
    if (jobId) {
      loadData();
    }
  }, [jobId]);

  const loadData = async () => {
    const res = await getJobById(jobId);
    if (res.success)
      form.setFieldsValue({
        ...res.data,
        EndDate:moment(new Date(res.data.EndDate), "DD/MM/YYYY") || moment(new Date().getDate(), "DD/MM/YYYY")
      });
  };
  const handleCancel = () => {
    setJobId("");
    setVisible(false);
    form.setFieldsValue({
      CompanyName: "",
      JobTitle: "",
      Area:"",
      Address: "",
      Salary: { Min: 0, Max: 0 },
      EndDate: moment(new Date().getDate(), "DD/MM/YYYY"),
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
    const res = await updateJob(jobId, values);
    if (res.success) {
      setVisible(false);
      form.setFieldsValue({
        CompanyName: "",
        JobTitle: "",
        Area:"",
        Address: "",
        Salary: { Min: 0, Max: 0 },
        EndDate: moment(new Date().getDate(), "DD/MM/YYYY"),
        Department: "",
        JobDescription: "",
        Requirement: "",
        Benefit: "",
        Timetable: "",
      });
      loadList();
      setJobId("");
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
          label="T??n c??ng ty"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="JobTitle"
          label="V??? tr?? c??ng vi???c"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Area"
          label="Khu v???c"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Address"
          label="?????a ch???"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["Salary", "Min"]}
          label="L????ng t???"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["Salary", "Max"]}
          label="t???i"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="EndDate"
          label="Th???i h???n tuy???n d???ng"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <DatePicker format={"DD/MM/YYYY"}/>
        </Form.Item>
        <Form.Item
          name="Department"
          label="Ph??ng ban"
          rules={[
            {
              required: true,
              message: "Kh??ng ???????c b??? tr???ng",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="JobDescription" label="M?? t??? c??ng vi???c">
          <TextEditor />
        </Form.Item>
        <Form.Item name="Requirement" label="Y??u c???u c??ng vi???c">
          <TextEditor />
        </Form.Item>
        <Form.Item name="Benefit" label="Quy???n l???i">
          <TextEditor />
        </Form.Item>
        <Form.Item name="Timetable" label="Ca l??m">
          <TextEditor />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UpdateJobModal;
