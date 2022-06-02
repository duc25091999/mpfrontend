import React from "react";
import JobList from "../component/JobList";
import TopBar from "../component/TopBar";
import { Button, Form, Row, Col, Input, DatePicker } from "antd";
import AboutCard from "../component/AboutCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Footer from "../component/Footer";
import { useMpCandidateUser } from "../hook/user/useMpCandidate.user";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function Home() {
  const [form] = Form.useForm();
  const { createCandidate } = useMpCandidateUser();
  const onSubmit = (values) => {
    createCandidate({
      ...values,
    });
  };
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
      </div>
      <div
        style={{
          maxWidth: 2000,
          margin: "auto",
          padding: "0",
          width: "100%",
        }}
      >
        <img
          src="/home-banner.png"
          alt="MP Telecom logo"
          style={{ width: "100%" }}
        />
      </div>
      <div
      id="hiring"
        className="content-container"
        style={{
          maxWidth: 1600,
          margin: "auto",
          padding: "0 150px",
          marginTop: "100px",
        }}
      >
        <JobList />
      </div>

      <div
        className="content-container"
        style={{
          maxWidth: 1600,
          margin: "auto",
          padding: "0 150px",
          marginTop: "100px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            className="underline-title-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/arrow-logo.png" alt="MP Telecom logo" />
            <div
              style={{
                fontWeight: 700,
                fontSize: 43,
                lineHeight: "50px",
                color: "#262626",
                marginLeft: "24px",
              }}
            >
              Tuyển dụng{" "}
              <span
                style={{
                  color: "rgba(69, 143, 246, 1)",
                }}
              >
                MP Telecom
              </span>
            </div>
          </div>
          <div
            style={{
              color: "#CCD2E9",
              marginBottom: 48,
            }}
          >
            Đừng bỏ lỡ cơ hội trở thành thành viên của đại gia đình MP Telecom
            với cơ hội phát triển nghề nghiệp tương lai rộng mở và mức thu nhập
            hấp dẫn.
          </div>
        </div>

        <div
          className="hiring-section"
          style={{ display: "flex", gap: 24, alignItems: "center" }}
        >
          <div style={{ flex: 1 }}>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>{" "}
              Bạn là sinh viên mới ra trường?
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Bạn lo lắng về cơ hội việc làm? Kĩ năng và kinh nghiệm?
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Bạn tìm kiếm một môi trường làm việc ổn định với mức thu nhập hấp
              dẫn?
            </p>
            <p className="underline-title-left">
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Bạn mong muốn làm việc ở công ty có quy mô lớn
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#4979D1",
                fontWeight: "bold",
              }}
            >
              Tất cả sẽ được giải đáp khi đến với MP Telecom.
            </p>
          </div>
          <div style={{ width: "55%", maxWidth: 600 }}>
            <img
              src="/hiring-images.png"
              alt="MP Telecom logo"
              width={"100%"}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/welcome.png"
            alt="MP Telecom logo"
            style={{ width: "75%", maxWidth: 900, margin: "48px 0" }}
          />
        </div>

        <div
          className="reqirement-section"
          style={{ display: "flex", gap: 24, alignItems: "center" }}
        >
          <div style={{ width: "55%", maxWidth: 800, minWidth: 300 }}>
            <img src="/group-member.png" alt="MP Telecom logo" width={"100%"} />
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#4979D1",
                fontWeight: "bold",
              }}
              className="underline-title-left"
            >
              Chúng tôi đang tìm kiếm ứng viên với đặc điểm
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Nam/Nữ, dưới 35 tuổi
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Tốt nghiệp THPT hoặc từ Trung cấp trở lên
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Chất giọng to rõ, dễ nghe (không nói ngọng, nói lắp, nói giọng địa
              phương)
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Có khả năng làm việc cố dịnh giờ hàng chính hoặc xoay ca theo lịch
              cá nhân, nghỉ 01 ngày bất kỳ/tuần.
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Kiên nhẫn, hòa đòng & xem việc chăm sóc khách hàng là niềm vui
              trong cuộc sống.
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Tin học văn phòng cơ bản.
            </p>
          </div>
        </div>

        <div
          className="underline-title-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "48px 0",
          }}
        >
          <img src="/arrow-logo.png" alt="MP Telecom logo" />
          <div
            style={{
              fontWeight: 700,
              fontSize: 43,
              lineHeight: "50px",
              color: "#262626",
            }}
            id="training"
          >
            <span
              style={{
                color: "rgba(69, 143, 246, 1)",
                marginLeft: 24,
              }}
            >
              Đào tạo
            </span>
          </div>
        </div>

        <div
          className="training-section"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: "url('/training-bg.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            padding: "96px 0",
          }}
        >
          <div style={{ width: "50%", maxWidth: 600 }}>
            <div>
              <img
                width={"100%"}
                src="/training-image-1.png"
                alt="MP Telecom logo"
              />
            </div>

            <div
              style={{
                padding: 24,
                borderRadius: "21px",
                color: "white",
                backgroundColor: "rgba(69, 143, 246, 1)",
                position: "relative",
                top: 48,
                left: "-48px",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "56px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                MP Telecom mang đến cho bạn:
              </div>
              <p>
                {" "}
                <span style={{ margin: "0 12px" }}>&#9679;</span>Thu thập hấp
                dẫn
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                Hưởng đầy đủ các chế độ BHXH + BHYT + các chế độ phúc lợi khác.
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Môi trường làm
                việc chuyên nghiệp, năng động{" "}
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Công việc ổn
                định lâu dài
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Có nhiều cơ hội
                thăng tiến và phát triển
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                Các chế độ khác theo Luật định và theo quy định của công ty.
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                Thường xuyên tổ chức các hoạc động phong trào, team building{" "}
              </p>
            </div>
          </div>
          <div style={{ width: "50%", maxWidth: 600 }}>
            <div
              style={{
                padding: 24,
                borderRadius: "21px",
                color: "white",
                backgroundColor: "rgba(69, 143, 246, 1)",
                position: "relative",
                left: 48,
                top: "-48px",
              }}
            >
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "56px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Đào tạo MP Telecom
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span> Với đội
                ngũ nhân sự dày dặn kinh nghiệm, vững vàng chuyên môn nghiệp vụ,
                MP Telecom sẽ giúp bạn củng cố và nâng cao những kĩ năng nghề
                nghiệp như:
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Kĩ năng lắng
                nghe
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Kĩ năng phản
                hồi
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Kĩ năng chăm
                sóc khách hàng
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>Kĩ năng tư vấn
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span> MP Telecom
                có định hướng rõ ràng lộ trình phát triển cho từng nhân viên.
                Đặc biệt, chính sách đào tạo nội bộ và đào tạo bên ngoài giúp
                nhân viên phát triển bản thân nhanh chóng.{" "}
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span> MP Telecom
                ghi nhận tất cả cố gắng của nhân viên nhằm đưa đến kết quả công
                bằng, minh bạch nhất, cất nhắc vị trí mới và có lộ trình thăng
                tiến rõ ràng...{" "}
              </p>
            </div>
            <div>
              <img
                width={"100%"}
                src="/training-image-2.png"
                alt="MP Telecom logo"
              />
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            className="underline-title-center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/arrow-logo.png" alt="MP Telecom logo" />
            <div
            id="aboutus"
              style={{
                fontWeight: 700,
                fontSize: 43,
                lineHeight: "50px",
                color: "#262626",
                marginLeft: 24,
              }}
            >
              Về chúng tôi{" "}
              <span
                style={{
                  color: "rgba(69, 143, 246, 1)",
                }}
              >
                MP Telecom
              </span>
            </div>
          </div>
          <div
            style={{
              color: "#CCD2E9",
              margin: "24px 0",
            }}
            
          >
            MP TELECOM là công ty hàng đầu tại Việt Nam chuyên cung cấp các giải
            pháp và dịch vụ Contact Center và Business Process Outsourcing – BPO
            nhờ sự kết hợp chặt chẽ của ba nền tảng chính:
            <br /> Con người – Công nghệ – Giải pháp.
          </div>
        </div>
        <div
          className="about-us-section"
          style={{
            maxWidth: 815,
            margin: "auto",
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            backgroundImage: "url('/about-us-bg.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            padding: "48px 24px",
          }}
        >
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Quản lý thông tin khách hàng"}
            content={"Quản lý thông tin khách hàng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Quản lý thông tin khách hàng"}
            content={"Quản lý thông tin khách hàng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Quản lý thông tin khách hàng"}
            content={"Quản lý thông tin khách hàng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Quản lý thông tin khách hàng"}
            content={"Quản lý thông tin khách hàng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Quản lý thông tin khách hàng"}
            content={"Quản lý thông tin khách hàng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Quản lý thông tin khách hàng"}
            content={"Quản lý thông tin khách hàng"}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" ghost>
            Learn more
          </Button>
        </div>
        <div
          style={{
            background: "#458FF6",
            borderRadius: 20,
            padding: "24px",
            display: "flex",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <div
            className="send-mail-bg"
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <img src="/send-mail.png" alt="MP Telecom logo" width={"100%"} />
          </div>
          <div>
            <div
            id="register"
              style={{
                textAlign: "center",
                color: "white",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "50px",
                lineHeight: "59px",
                fontWeight: "900",
                fontStyle: "italic",
                marginBottom: "24px",
              }}
            >
              Ứng tuyển ngay
            </div>
            <Form form={form} onFinish={onSubmit}>
              <Row gutter={12}>
                <Col span={16} offset={4}>
                  <Form.Item name="Name">
                    <Input size="large" placeholder="Họ tên *" />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="DateOfBirth">
                    <DatePicker size="large" placeholder="DD/MM/YY *" style={{width:"100%"}} format={"DD/MM/YYYY"} />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="Phone">
                    <Input size="large" placeholder="Số điện thoại*" />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="Email">
                    <Input size="large" placeholder="Email*" />
                  </Form.Item>
                </Col>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Form.Item>
                    <Button block size="large" htmlType="submit" type="primary">
                      Đăng kí ngay
                    </Button>
                  </Form.Item>
                </div>
              </Row>
            </Form>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            margin: 60,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 43,
              lineHeight: "50px",
              color: "#262626",
            }}
          >
            <span
              style={{
                color: "rgba(69, 143, 246, 1)",
              }}
            >
              Khách hàng{" "}
            </span>
            Đối tác
          </div>
        </div>
        <Slider
          {...settings}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 60,
          }}
        >
          {[
            "viettel",
            "mobifone",
            "vinaphone",
            "vietnamobile",
            "vtv",
            "anvien",
          ].map((item) => (
            <div key={item}>
              <img style={{ margin: "auto" }} src={`/${item}.png`} alt={item} />
            </div>
          ))}
        </Slider>
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
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      style={{ fontSize: "2rem", color: "#458FF6" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      style={{ fontSize: "2rem", color: "#458FF6" }}
      onClick={onClick}
    />
  );
}
