import './styles.scss'
import news from '../../../data/news.json'

export default () => (
    <div className="news-table">
        <h3 className="title">News</h3>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {news.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td><a href={'news/' + item.slug} className="btn">Click here</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)