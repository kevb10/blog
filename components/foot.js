const Foot = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="left">
        <p>The left side of the footer</p>
      </div>
      <div className="right">
        <p>The right side of the footer</p>
      </div>
    </div>
    <style jsx>{`
      .footer {
        position: relative;
        margin-top: 50px;
        bottom: 0;
        width: 100%;
        height: 60px;
        background: #067df7;
        padding: 20px;
      }

      .footer-content {
        margin-right: auto;
        margin-left: auto;
        width: 70%;
      }

      .footer-content p {
        color: #fff;
      }

      .left {
        float: left;
        postition: fixed;
      }
      
      .right {
        float: right;
        postition: fixed;
      }
    `}</style>
  </div>
)

export default Foot
