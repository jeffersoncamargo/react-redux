import './styles.scss'
import students from '../../../data/students.json'

export default () => (
    <div className="students-list">
        <ul>
            {students.map((student, i) => (
                <li key={i}>
                    <strong>Name:</strong> {student.name}
                    <br />
                    <strong>Grade:</strong> <span>{student.grade}</span>
                </li>
            ))}
        </ul>
    </div>
)