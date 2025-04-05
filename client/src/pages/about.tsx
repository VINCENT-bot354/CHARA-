import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl font-bold mb-6 text-center">About CHARA WARDROBES and PERFUMES</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">CHARA WARDROBES and PERFUMES was born from a passion for quality craftsmanship and unique fragrances. We believe that clothing and scent are powerful forms of self-expression that should be accessible to everyone.</p>
            <p>Our curated collections bring together timeless elegance and contemporary trends, offering you the perfect pieces to express your individual style.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">Our Mission</h2>
            <p>We strive to provide exceptional quality garments and fragrances that help our customers feel confident and inspired. Our commitment to craftsmanship, attention to detail, and customer satisfaction guides everything we do.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-heading text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Quality:</span> We believe in creating products that stand the test of time.</li>
              <li><span className="font-semibold">Authenticity:</span> Each item reflects our dedication to genuine expression.</li>
              <li><span className="font-semibold">Customer Care:</span> Your satisfaction is our priority.</li>
              <li><span className="font-semibold">Innovation:</span> We continuously evolve while honoring timeless traditions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
