import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Fictional Engineering"
      description="A601 · Fictional Engineering Lab"
    >
      <main style={{padding: '4rem 1rem', textAlign: 'center'}}>
        <h1>Fictional Engineering Lab (A601)</h1>
        <p>
          Student-run engineering studio focusing on accessibility, mechatronics,
          and human-centered design.
        </p>
        <div style={{marginTop: '2rem'}}>
          <Link className="button button--primary button--lg" to="/projects">
            View Projects
          </Link>
        </div>
      </main>
    </Layout>
  );
}
