import { useState } from "react";
import emojiList from './../emojiList.json';
import 'bootstrap/dist/css/bootstrap.css';
function Search() {
  const [search, setSearch] = useState("");
  const [emojis, setEmojis] = useState(emojiList);

  const filteredEmojis = emojis.filter(emoji =>
    (emoji.title?.toLowerCase().includes(search.toLowerCase()) ||
     emoji.keywords?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h1>Emoji Search</h1>
      <table border="1" style={{width:'auto'}} class="table">
      <thead>
        <tr> 
          <th scope="col">
            <input 
              type="text"
              className="form-control"
              placeholder="Search emojis..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
          {filteredEmojis.map(emoji => (
            <div key={emoji.title}>
              <td >
              <span>{emoji.symbol}</span>
              </td>
              <td>
              <span>{emoji.title}</span>
              </td>
              
            </div>
          ))}
          </th>
        </tr>
      </tbody>
      </table>
      
    </div>
  );
}

export default Search;
