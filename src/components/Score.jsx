function Score({courseName, courseResult}){
  const scores = courseResult.map(item => item.score);
  const average = scores.reduce((sum,value) => sum + value,0) / scores.length;
  const min = Math.min(...scores);
  const max = Math.max(...scores);

    return(
        <div class="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                {
                    courseResult.map((data,i) => (
                         <tr>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td className={data.score < 50 ? "warning" : ""}>{data.score}</td>
                        </tr>
                    ))
                }
            </tbody>
          </table>

          <div className="static">
              <div>
                <span>AVERAGE</span>
                <p>{average.toFixed(2)}</p>
              </div>
              <div>
                <span>MIN</span>
                <p>{min}</p>
              </div>
              <div>
                <span>MAX</span>
                <p>{max}</p>
              </div>
          </div>

        </div>
    );
}
export default Score;