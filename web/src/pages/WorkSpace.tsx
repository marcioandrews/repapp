import '../styles/Global.css';
import '../styles/Variables.css';
import '../styles/pages/WorkSpace.css';
import Navbar from '../components/navbar/Navbar';
import ColumnContent from '../components/column/Column';
import InputColumn from '../components/column/InputColumn';
import { useState, useEffect, useContext } from 'react';
import { Columns, Card } from '../types/Columns';
import { getColumns, createColumn, deleteColumn } from '../context/AuthProvider/util'
import LogoW from '../assets/logoW.svg'
import { AuthContext } from '../context/AuthProvider';
import { useHistory } from 'react-router-dom';

function WorkSpace() {
  const [inputSaveColumn, setInputSaveColumn] = useState(false)
  const [inputDeleteColumn, setInputDeleteColumn] = useState(false)
  const [saveInputTitle, setSaveInputTitle] = useState('')
  const [columns, setColumns] = useState([] as Columns)

  const userContext = useContext(AuthContext);

  async function saveColumns(): Promise<Columns> {
    const savedColumns = await getColumns()
    setColumns(savedColumns)
    return savedColumns
  }

  useEffect(() => {
    saveColumns();

  }, []);

  let history = useHistory();

  function logout() {
    userContext.logout()
    history.replace('/');
  }

  async function saveColumn() {
    const newColumn = await createColumn(saveInputTitle)
    console.log(newColumn)
    columns.push(newColumn)
    setInputSaveColumn(!inputSaveColumn)
  };

  function deleteColumnData(columnIndex: number, columnId: string) {
    deleteColumn(columnId)
    columns.splice(columnIndex, 1)
    setInputDeleteColumn(!inputDeleteColumn)
  }

  function title(title: string) {
    setSaveInputTitle(title)
  }

  function saveCard(card: Card, columnIndex: number) {
    columns[columnIndex].cards.push(card)
  }

  return (
    <div id="page-workspace" >
      <div className="navibarr">
        <img src={LogoW} alt="Login Image" />
        <input className="button" type="submit" value="SAIR" onClick={() => logout()} />
      </div>
      <main>
        <div className="content-wrapper">
          <div className="content-cards">

            {columns.map((column, columnIndex: number) =>
              <ColumnContent key={column.id} saveCard={saveCard} columnIndex={columnIndex} column={column} deleteColumnData={deleteColumnData} />
            )}
            <div className="card-composerr">
              {inputSaveColumn ?
                <InputColumn title={title}>
                  <div className="buttons-content">
                    <div className="button">
                      <p onClick={saveColumn}>Salvar</p>
                    </div>
                    <div>
                      <p onClick={() => setInputSaveColumn(!inputSaveColumn)}>X</p>
                    </div>
                  </div>
                </InputColumn>
                :
                <p onClick={() => setInputSaveColumn(!inputSaveColumn)}>+ Adicionar outra lista</p>}
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
export default WorkSpace;
