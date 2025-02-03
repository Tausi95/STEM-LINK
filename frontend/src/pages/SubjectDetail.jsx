// src/pages/SubjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/SubjectDetail.css';

const SubjectDetail = () => {
  const { grade, stream, subject } = useParams();
  const [subjectDetails, setSubjectDetails] = useState(null);

  useEffect(() => {
    // Simulating data fetching based on the subject
    const fetchSubjectDetails = () => {
      // Mocked data, replace with actual fetching logic
      const mockDetails = {
        materials: ['Material 1', 'Material 2', 'Material 3'],
        term: 'Term 1',
        tests: ['Test 1', 'Test 2'],
        lessons: ['Lesson 1', 'Lesson 2'],
        classes: ['Class 1', 'Class 2'],
      };
      setSubjectDetails(mockDetails);
    };

    fetchSubjectDetails();
  }, [grade, stream, subject]);

  return (
    <div className="subject-detail-container">
      <h1>{subject} - {stream} - {grade}</h1>
      <section className="subject-info">
        <h2>Materials</h2>
        <ul>
          {subjectDetails?.materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>

        <h2>Term</h2>
        <p>{subjectDetails?.term}</p>

        <h2>Tests</h2>
        <ul>
          {subjectDetails?.tests.map((test, index) => (
            <li key={index}>{test}</li>
          ))}
        </ul>

        <h2>Lessons</h2>
        <ul>
          {subjectDetails?.lessons.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>

        <h2>Classes</h2>
        <ul>
          {subjectDetails?.classes.map((cls, index) => (
            <li key={index}>{cls}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SubjectDetail;
