import "./Table.css";

export default function Table({ data, handleClick }) {
  console.log(data);
  return (
    <div className="tablediv">
      <button className="tablebutton bc">ALert</button>
      <button className="tablebutton">Trigered Alerts</button>
      <table id="tabledata">
        <tbody>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
          {data.map((val, index) => {
            return (
              <tr id={index}>
                <td>{val.Company}</td>
                <td>{val.Contact}</td>
                <td>{val.Country}</td>
                <td>
                  <span
                    className="material-icons-outlined delete hover"
                    onClick={handleClick}
                  >
                    delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
