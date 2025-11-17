import React from 'react';
import Layout from '@theme/Layout';
import './projects.css';

const projectList = [
  {
    title: 'Assistive Guitar Device',
    description: 'EMG-controlled mechanical fretting system.',
    link: '/projects/guitar',
  },
  {
    title: 'Magnetic Levitation System',
    description: 'LM324C + Hall sensors levitation platform.',
    link: '/projects/maglev',
  },
  {
    title: 'Digital Design Studio Tools',
    description: 'Inventory, lab tools, safety protocols.',
    link: '/projects/lab-tools',
  },
];

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className="project-grid">
        {projectList.map((p, idx) => (
          <a key={idx} href={p.link} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </a>
        ))}
      </div>
    </Layout>
  );
}
