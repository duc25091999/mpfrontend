import React from "react";
import {
  FacebookFilled,
  YoutubeFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 30px",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div>
          <img src="/hotline.png" alt="MP Telecom hotline" />
        </div>
        <div
          style={{
            gap: 12,
            color: "#FFFFFF",
            alignItems: "end",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "fit-content",
              background: "#458FF6",
              padding: 12,
              fontStyle: "italic",
              borderRadius: "10px",
            }}
          >
            Hỗ trợ trực tuyến
          </div>
          <div
            style={{
              fontSize: "25px",
              background: "#458FF6",
              padding: 12,
              fontStyle: "italic",
              borderRadius: "10px",
            }}
          >
            Chat với chúng tôi
          </div>
        </div>
      </div>

      <div
        className={styles.footer}
        style={{
          backgroundColor: "#458FF6",
          padding: "56px 134px",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap:"wrap",
            gap:"24px"
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              width: "fit-content",
              padding: "20px 40px",
            }}
          >
            <img src="/mp-logo.png" alt="MP Telecom logo" width={200} />
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <FacebookFilled style={{ fontSize: "3rem" }} />
            <YoutubeFilled style={{ fontSize: "3rem" }} />
            <LinkedinFilled style={{ fontSize: "3rem" }} />
          </div>
        </div>

        <div
        className={styles.footerContent}
          style={{ display: "flex", justifyContent: "space-between", gap: 24 }}
        >
          <div>
            <p>
              <span style={{ fontWeight: "bold" }}>Head Office:</span> Tầng 10,
              tòa SUDICO, Mễ Trì, Mỹ Đình 1, Nam Từ Liêm, Hà Nội.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Hà Nội:</span> Lô S5-7, đường
              Triều Khúc, Thanh Trì, Hà Nội.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Hồ Chí Minh:</span> 36-38A
              Trần Văn Dư, Tân Bình, TP. Hồ Chí Minh
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Đà Nẵng:</span> Số 6 Trần
              Phú, Hải Châu, Đà Nẵng.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Dịch vụ</div>
            <p>Dịch vụ Outsourcing Contact Center</p>
            <p>Dịch vụ Gọi ra Telesales</p>
            <p>Thuê ngoài nhân sự và Đào tạo kỹ năng mềm</p>
            <p>Hỗ trợ kỹ thuật</p>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Giải pháp</div>
            <p>Phần mềm quản lý thông tin khách hàng (CRM)</p>
            <p>Giải pháp AI Call Center</p>
            <p>Giải pháp MP Contact Center</p>
            <p>Giải pháp gọi ra OTC</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
