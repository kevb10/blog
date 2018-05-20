import Link from 'next/link'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <div className="container">
      <div>
        <h1 className="title">Welcome</h1>
        <p className="description">Watch me as I build a little blogging space.</p>

        <div className="row">
          <Link href="#">
            <a className="card">
              <h3>Blog Title &rarr;</h3>
              <p>This is a little preview of the blog. This shouldn't be more than
              a cerntain number of characters.</p>
            </a>
          </Link>
          <Link href="https://open.segment.com/create-next-app">
            <a className="card">
              <h3>Examples &rarr;</h3>
              <p>
                Find other example boilerplates on the <code>create-next-app</code> site
              </p>
            </a>
          </Link>
          <Link href="https://github.com/segmentio/create-next-app">
            <a className="card">
              <h3>Create Next App &rarr;</h3>
              <p>Was this tool helpful? Let us know how we can improve it</p>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .container {
          height: 100%;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title, .description {
          text-align: center;
        }
        .row {
          width: 70%;
          margin-top: 50px;
          margin-right: auto;
          margin-left: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 100%;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #fff;
        }
        .card:hover {
          border: 1px solid #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  </Layout>
)

export default Index
