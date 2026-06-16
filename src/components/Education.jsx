import './Section.css';
import './Education.css';

const educationData = [
  {
    qualification: 'B.Tech',
    institution: 'KL University',
    year: '2025 - 2029',
  },
  {
    qualification: 'Intermediate',
    institution: 'Sri Chaitanya jr kalasala',
    year: '2022 - 2024',
  },
];

function Education() {
  return (
    <section id="education" className="site-section">
      <h2>Education</h2>
      <table className="edu-table">
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((row) => (
            <tr key={row.qualification}>
              <td>{row.qualification}</td>
              <td>{row.institution}</td>
              <td>{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;
