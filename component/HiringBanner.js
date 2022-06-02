import React from 'react'
import { Button } from 'antd'

function HiringBanner() {
  return (
    <div className="hiring-banner">
          <div>
            <img src="/send-mail.png" alt="MP Telecom logo" width={"100%"} />
          </div>
          <div className="hiring-banner-content">
            <div
              style={{
                fontSize: "43px",
                fontHeight: "50px",
                fontWeight: "bold",
                color: "#2E4E92",
              }}
            >
              Tuyển Dụng MP Telecom
            </div>
            <div style={{textAlign:"start",width:"fit-content",margin:"auto"}}>
            <p style={{ fontSize: "1.25rem", color: "#458FF6" }}>
              &#10003;Dịch vụ chuyên nghiệp
            </p>
            <p style={{ fontSize: "1.25rem", color: "#458FF6" }}>
              &#10003;Đào tạo chuyên sâu
            </p>
            <p style={{ fontSize: "1.25rem", color: "#458FF6" }}>
              &#10003;Hỗ trợ đầy đủ trang thiết bị
            </p>
            </div>
            <div>
              <Button type="primary">Ứng tuyển ngay</Button>
            </div>
          </div>
        </div>
  )
}

export default HiringBanner