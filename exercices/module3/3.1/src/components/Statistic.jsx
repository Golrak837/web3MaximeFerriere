import Average from "./Average"
const Statistic = (props) => {
    let good = props.good
    let bad = props.bad
    let neutral = props.neutral
    return (
        <table>
        <thead>
            <tr>
                <th>Statistics</th>
            </tr>
        </thead>
        
            
        <Average text="Good" value={good} />
        <Average text="Bad" value={bad} />
        <Average text="Neutral" value={neutral} />
        <Average text="Average" value={(good - bad) / (good + bad + neutral)} />
        <Average
          text="Positive"
          value={(good / (good + bad + neutral)) * 100}
        />
        
        </table>
    )
}
export default Statistic;