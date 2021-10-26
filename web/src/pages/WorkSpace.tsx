import '../styles/Global.css';
import '../styles/Variables.css';
import '../styles/pages/WorkSpace.css';
import Navbar from '../components/navbar/Navbar';
import ColumnContent from '../components/column/Column';
import Input from '../components/column/Input';
import { useState } from 'react';
import { Columns, Column, Card } from '../types/Columns';

function WorkSpace() {
  const [input, setInput] = useState(false)
  const [saveContent, setSaveContent] = useState('')

  let card: Card = {
    title: "kkkkkk",
    discription: "sjoisjisis",
    tags: "jijdiidd",
    priority: "sjfhusfhujs"
  }

  let column: Column = {
    title: "kkkkkk",
    card: [
      card, card, card
    ]
  }

  let columns: Columns =
    [
      column, column
    ]
    
  function addCard(index: number, content: string) {
    // data.cards[index].push(content)
    console.log(index, content)
  }
  function content(content: string) {
    setSaveContent(content)

  }
  function saveButton() {
    setInput(!input)
    // data.cards.push([])
    // data.columns.push(saveContent)
    // console.log(data.cards)
  }

  return (
    <div id="page-workspace" >
      <Navbar />
      <main>
        <div className="content-wrapper">
          <div className="content-cards">

            {columns.map((column) =>
              <ColumnContent column={column} />
            )}
            <div className="card-composerr">
              {input ?
                <Input content={content}>
                  <div className="buttons-content">
                    <div className="button">
                      <p onClick={saveButton}>Salvar</p>
                    </div>
                    <div>
                      <p onClick={() => setInput(!input)}>X</p>
                      <p onClick={() => console.log(saveContent)}>V</p>
                    </div>
                  </div>
                </Input>
                :
                <p onClick={() => setInput(!input)}>+ Adicionar outra lista</p>}
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
export default WorkSpace;
