const ToDos = () =>{
    return(
        <div>
  <table>
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Check</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Jump</td>
        <td><input type="checkbox"></input></td>
      </tr>
      {/* row 2 */}
    </tbody>
  </table>
</div>

    )
}

export default ToDos