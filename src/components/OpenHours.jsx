import "../modules/OpenHours.modules.css";

export default function OpenHours() {
  return (
    <div className="open-hours">
      <h2>Opening Hours</h2>
      <div className="hours-table">
      <table>
        <tbody>
        <tr>
          <th>Sunday - Thursday</th>
          <td>17:00 - 00:00</td>
        </tr>
        <tr>
          <th>Friday</th>
          <td>15:00 - 02:00</td>
        </tr>
        <tr>
          <th>Saturday</th>
          <td>13:00 - 02:00</td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}