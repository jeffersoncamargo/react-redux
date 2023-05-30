import './styles.scss'

import First from './components/basics/First'
import WithParameters from './components/basics/WithParameters'
import RandomInteger from './components/basics/RandomInteger'
import Cards from './components/layout/Cards'
import Card from './components/layout/Card'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentsList from './components/looping/StudentsList'
import NewsTable from './components/looping/NewsTable'
import OddOrEven from './components/conditional/OddOrEven'
import Direct from './components/comunications/Direct'
import Indirect from './components/comunications/Indirect'
import Input from './components/form/Input'

export default () => (
    <>
        <h1 className="title">React Foundations</h1>
        <Cards>
            <Card title="#10 - Controlled component" color="#e2d810">
                <Input />
            </Card>
            <Card title="#9 - Indirect comunication between components" color="#0d1137">
                <Indirect />
            </Card>
            <Card title="#8 - Direct comunication between components" color="#950740">
                <Direct />
            </Card>
            <Card title="#7 - Odd or Even (conditional)" color="#687864">
                <OddOrEven number={2} />
            </Card>
            <Card title="#6 - News table (iteration)" color="#fa4a32">
                <NewsTable />
            </Card>
            <Card title="#5 - Students list (iteration)" color="#4ac2ed">
                <StudentsList />
            </Card>
            <Card title="#4 - Component with children sharing props" color="#ff634d">
                <Family surname="Camargo">
                    <FamilyMember name="Jefferson" />
                    <FamilyMember name="Carolina" />
                    <FamilyMember name="Sofia" />
                </Family>
                <Family surname="Oliveira">
                    <FamilyMember name="Vinícius" />
                </Family>
            </Card>
            <Card title="#3 - Random Number" color="#193e51">
                <RandomInteger min={1} max={10} />
                <RandomInteger min={5} max={7} />
                <RandomInteger min={200} max={300} />
                <RandomInteger min={7} max={4001} />
            </Card>
            <Card title="#2 - Component with props" color="#146666">
                <WithParameters name="John" age={32} />
            </Card>
            <Card title="#1 - First basic component" color="#f57923">
                <First />
            </Card>
        </Cards>
    </>
)