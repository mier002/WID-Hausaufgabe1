import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="Einleitung">
        <h1>Löwe</h1>
        <p>
          Der Löwe (Panthera leo) ist neben dem Tiger eine der beiden größten
          Arten aus der Familie der Katzen. Er ist heute nur noch in Teilen
          Afrikas südlich der Sahara sowie im indischen Bundesstaat Gujarat
          beheimatet; in Afrika ist er das größte Landraubtier.
          Charakteristisches Merkmal erwachsener Männchen ist eine Mähne. Löwen
          leben im Unterschied zu anderen Katzen in Rudeln. Eine veraltete,
          poetische Bezeichnung ist Leu.
        </p>
      </div>

      <div class="Main">
        <div className="Inhaltsverzeichnis">
          <div>
            <h2>Inhaltsverzeichnis</h2>
            <ol>
              <li>Fakten</li>
              <li>Lebensraum</li>
              <li>Rudeltiere</li>
              <ol>
                <li>Verhalten</li>
              </ol>
            </ol>
          </div>
        </div>

        <div class="Fakten">
          <table>
            <thead>
              <h2>Löwe</h2>
              <tr>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/800px-011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
                  width="100px"
                />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ordnung: </td>
                <td>Raubtiere</td>
              </tr>
              <tr>
                <td>Unterordnung: </td>
                <td>Katzenartige</td>
              </tr>
              <tr>
                <td>Familie: </td>
                <td>Katzen</td>
              </tr>
              <tr>
                <td>Unterfamilien: </td>
                <td>Grosskatzen</td>
              </tr>
              <tr>
                <td>Gattung: </td>
                <td>Eigentliche Grosskatze</td>
              </tr>
              <tr>
                <td>Art: </td> <td>Löwe</td>
              </tr>
            </tbody>
          </table>
          <div></div>
        </div>

        <div className="Lebensraum">
          <h2>Lebensraum</h2>
          <p>
            Während der letzten{" "}
            <a href="https://de.wikipedia.org/wiki/K%C3%A4nozoisches_Eiszeitalter">
              Eiszeiten
            </a>{" "}
            hatten <span className="fett">Löwen</span> (die je nach{" "}
            <a href="https://de.wikipedia.org/wiki/Systematik_(Biologie)">
              systematischer
            </a>{" "}
            Einordnung verschiedene Arten repräsentierten oder als Unterarten
            nur einer Art eingestuft werden) ein großes Verbreitungsgebiet. Es
            reichte in der letzten Kaltzeit von Peru über Alaska, wo der{" "}
            <a href="https://de.wikipedia.org/wiki/Amerikanischer_L%C3%B6we">
              Amerikanische Löwe
            </a>{" "}
            vorkam, erstreckte sich über Sibirien und weite Teile Nordasiens und
            Europas, wo der{" "}
            <a href="https://de.wikipedia.org/wiki/H%C3%B6hlenl%C3%B6we">
              Höhlenlöwe
            </a>{" "}
            vorkam, bis Indien, Arabien und Afrika im Süden. Einen Großteil
            dieses Verbreitungsgebietes büßten die Löwen allerdings schon am
            Ende des Eiszeitalters ein.
          </p>

          <img
            src="https://www.peta.de/wp-content/uploads/2021/06/loewe-kopf-ingo-stiller-3tkxfe2GocY-c-unsplash.jpg"
            width="250px"
            alt="Löwe"
          />
        </div>

        <div className="table">
          <thead>
            <tr>
              <th>Land</th>
              <th>Anzahl</th>
              <th>Lebensorte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Südafrika</td>
              <td>2'000-3'000</td>
              <td>Nationalparks und private Schutzgebiete</td>
            </tr>
            <tr>
              <td>Kenia</td>
              <td>2'000</td>
              <td>Masai Mara</td>
            </tr>
            <tr>
              <td>Sambia</td>
              <td>1'200</td>
              <td>Nationalpark South Luangwa</td>
            </tr>
          </tbody>
        </div>

        <div className="Rudeltiere">
          <h2>Rudeltiere</h2>
          <p>
            Im Gegensatz zu anderen, eher einzelgängerischen Großkatzen leben
            Löwen im <span className="fett">Rudel</span>. Ein solches Rudel
            besteht zumeist aus drei bis zehn, ausnahmsweise bis zu 21
            untereinander verwandten Weibchen und deren Nachkommen, die von
            einer sogenannten „Koalition“ aus einigen erwachsenen Männchen gegen
            rudelfremde Männchen verteidigt werden. Für gewöhnlich gibt es in
            einem Rudel drei oder vier erwachsene Männchen, ausnahmsweise bis zu
            neun, selten nur eines. Diese Männchen sind in der Regel (aber nicht
            immer) miteinander verwandt, sie stehen in der Rangordnung über den
            Weibchen.
          </p>
        </div>
      </div>

      <div className="Verhalten">
        <h3>Verhalten</h3>
        <p> Das Verhalten ist unterschiedlich.</p>
      </div>
    </div>
  );
}
