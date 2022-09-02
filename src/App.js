import React from 'react';
import { v1 } from 'uuid';

import './App.css';
import 'antd/dist/antd.css';

import { DeleteTwoTone } from '@ant-design/icons';
import { List, Divider } from 'antd';

import FormInput from './components/FormInput';

function App() {
  const [todoList, setTodoList] = React.useState([]);

  const handleDeleteTask = (rowKey) => {
    setTodoList(todoList.filter((item, index) => index !== rowKey));
  };

  const handleAddTask = (text) => {
    todoList.length <= 9
      ? setTodoList((todoList) => [...todoList, text])
      : alert('Ошибка при добавлении задачи. Список переполнен!!!');
  };
  const id = v1();

  return (
    <div style={{ marginLeft: '10px', marginRight: '10px', maxWidth: '800px' }}>
      <Divider orientation="left">
        <h2>Список задач</h2>
      </Divider>
      <FormInput addTask={handleAddTask} />
      <List
        header={
          <div>
            <h3>
              Количество задач <strong style={{ fontSize: '20px' }}>{todoList.length} </strong>{' '}
            </h3>
          </div>
        }
        footer={<div>Добавьте новую задачу</div>}
        bordered
        rowKey={id}
        dataSource={todoList}
        renderItem={(item, rowKey) => (
          <List.Item style={{ display: 'flex' }}>
            {item.text}{' '}
            <DeleteTwoTone
              onClick={() => handleDeleteTask(rowKey)}
              className="cu-p"
              style={{ fontSize: '18px', marginLeft: 'auto', marginRight: '0px' }}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
