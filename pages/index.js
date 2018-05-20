import Link from 'next/link'
import Layout from '../components/layout'
import api from '../api'
import React from 'react'

class Index extends React.Component {
  static async getInitialProps() {
    const posts = await api.posts().embed();
    return { posts };
  }

  render() {
    const { posts } = this.props;

    return (
      <Layout>
        <div className="container">
          <div>
            <h1 className="title">Welcome</h1>
            <p className="description">Watch me as I build a little blogging space.</p>
                {
                posts.map(post => (
                  <div className="row">
                  <Link
                      href={{
                        pathname: '/blogpost',
                        query: {
                          slug: post.slug,
                        },
                      }}
                    >
                    <a className="card">
                      <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      <p>{post.date}</p>
                      <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </a>
                  </Link>
                  </div>
                ))
              }
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
  }
}

export default Index
