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
              Tuy???n d???ng{" "}
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
            ?????ng b??? l??? c?? h???i tr??? th??nh th??nh vi??n c???a ?????i gia ????nh MP Telecom
            v???i c?? h???i ph??t tri???n ngh??? nghi???p t????ng lai r???ng m??? v?? m???c thu nh???p
            h???p d???n.
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
              B???n l?? sinh vi??n m???i ra tr?????ng?
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              B???n lo l???ng v??? c?? h???i vi???c l??m? K?? n??ng v?? kinh nghi???m?
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              B???n t??m ki???m m???t m??i tr?????ng l??m vi???c ???n ?????nh v???i m???c thu nh???p h???p
              d???n?
            </p>
            <p className="underline-title-left">
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              B???n mong mu???n l??m vi???c ??? c??ng ty c?? quy m?? l???n
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#4979D1",
                fontWeight: "bold",
              }}
            >
              T???t c??? s??? ???????c gi???i ????p khi ?????n v???i MP Telecom.
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
              Ch??ng t??i ??ang t??m ki???m ???ng vi??n v???i ?????c ??i???m
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Nam/N???, d?????i 35 tu???i
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              T???t nghi???p THPT ho???c t??? Trung c???p tr??? l??n
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Ch???t gi???ng to r??, d??? nghe (kh??ng n??i ng???ng, n??i l???p, n??i gi???ng ?????a
              ph????ng)
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              C?? kh??? n??ng l??m vi???c c??? d???nh gi??? h??ng ch??nh ho???c xoay ca theo l???ch
              c?? nh??n, ngh??? 01 ng??y b???t k???/tu???n.
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Ki??n nh???n, h??a ????ng & xem vi???c ch??m s??c kh??ch h??ng l?? ni???m vui
              trong cu???c s???ng.
            </p>
            <p>
              <span style={{ fontSize: "1.25rem", color: "#4979D1" }}>
                &#10003;
              </span>
              Tin h???c v??n ph??ng c?? b???n.
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
              ????o t???o
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
                MP Telecom mang ?????n cho b???n:
              </div>
              <p>
                {" "}
                <span style={{ margin: "0 12px" }}>&#9679;</span>Thu th???p h???p
                d???n
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                H?????ng ?????y ????? c??c ch??? ????? BHXH + BHYT + c??c ch??? ????? ph??c l???i kh??c.
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>M??i tr?????ng l??m
                vi???c chuy??n nghi???p, n??ng ?????ng{" "}
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>C??ng vi???c ???n
                ?????nh l??u d??i
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>C?? nhi???u c?? h???i
                th??ng ti???n v?? ph??t tri???n
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                C??c ch??? ????? kh??c theo Lu???t ?????nh v?? theo quy ?????nh c???a c??ng ty.
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>
                Th?????ng xuy??n t??? ch???c c??c ho???c ?????ng phong tr??o, team building{" "}
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
                ????o t???o MP Telecom
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span> V???i ?????i
                ng?? nh??n s??? d??y d???n kinh nghi???m, v???ng v??ng chuy??n m??n nghi???p v???,
                MP Telecom s??? gi??p b???n c???ng c??? v?? n??ng cao nh???ng k?? n??ng ngh???
                nghi???p nh??:
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>K?? n??ng l???ng
                nghe
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>K?? n??ng ph???n
                h???i
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>K?? n??ng ch??m
                s??c kh??ch h??ng
              </p>
              <p>
                <span style={{ margin: "0 12px" }}>&#9679;</span>K?? n??ng t?? v???n
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span> MP Telecom
                c?? ?????nh h?????ng r?? r??ng l??? tr??nh ph??t tri???n cho t???ng nh??n vi??n.
                ?????c bi???t, ch??nh s??ch ????o t???o n???i b??? v?? ????o t???o b??n ngo??i gi??p
                nh??n vi??n ph??t tri???n b???n th??n nhanh ch??ng.{" "}
              </p>
              <p>
                <span style={{ fontSize: "1.25rem" }}>&#10003;</span> MP Telecom
                ghi nh???n t???t c??? c??? g???ng c???a nh??n vi??n nh???m ????a ?????n k???t qu??? c??ng
                b???ng, minh b???ch nh???t, c???t nh???c v??? tr?? m???i v?? c?? l??? tr??nh th??ng
                ti???n r?? r??ng...{" "}
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
              V??? ch??ng t??i{" "}
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
            MP TELECOM l?? c??ng ty h??ng ?????u t???i Vi???t Nam chuy??n cung c???p c??c gi???i
            ph??p v?? d???ch v??? Contact Center v?? Business Process Outsourcing ??? BPO
            nh??? s??? k???t h???p ch???t ch??? c???a ba n???n t???ng ch??nh:
            <br /> Con ng?????i ??? C??ng ngh??? ??? Gi???i ph??p.
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
            title={"Qu???n l?? th??ng tin kh??ch h??ng"}
            content={"Qu???n l?? th??ng tin kh??ch h??ng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Qu???n l?? th??ng tin kh??ch h??ng"}
            content={"Qu???n l?? th??ng tin kh??ch h??ng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Qu???n l?? th??ng tin kh??ch h??ng"}
            content={"Qu???n l?? th??ng tin kh??ch h??ng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Qu???n l?? th??ng tin kh??ch h??ng"}
            content={"Qu???n l?? th??ng tin kh??ch h??ng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Qu???n l?? th??ng tin kh??ch h??ng"}
            content={"Qu???n l?? th??ng tin kh??ch h??ng"}
          />
          <AboutCard
            src={"/about-us-icon-1.png"}
            title={"Qu???n l?? th??ng tin kh??ch h??ng"}
            content={"Qu???n l?? th??ng tin kh??ch h??ng"}
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
              ???ng tuy???n ngay
            </div>
            <Form form={form} onFinish={onSubmit}>
              <Row gutter={12}>
                <Col span={16} offset={4}>
                  <Form.Item name="Name">
                    <Input size="large" placeholder="H??? t??n *" />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="DateOfBirth">
                    <DatePicker size="large" placeholder="DD/MM/YY *" style={{width:"100%"}} format={"DD/MM/YYYY"} />
                  </Form.Item>
                </Col>
                <Col span={16} offset={4}>
                  <Form.Item name="Phone">
                    <Input size="large" placeholder="S??? ??i???n tho???i*" />
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
                      ????ng k?? ngay
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
              Kh??ch h??ng{" "}
            </span>
            ?????i t??c
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
