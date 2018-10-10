import React from "react";
import * as Service from "./service";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      desc: "",
      data: [],
      editData: false
    };

    this.onSave = this.onSave.bind(this);
    this.fetchList = this.fetchList.bind(this);
  }

  componentWillMount() {
    this.fetchList();
  }

  fetchList() {
    Service.fetchDetail().then(res => {
      this.setState({ data: res.data });
    });
    this.setState({
      editData: false,
      name: "",
      desc: ""
    });
  }

  onSave(e) {
    e.preventDefault();
    const { name, desc, editData } = this.state;
    if (!editData) {
      Service.postDetail({ name, desc }).then(() => this.fetchList());
    } else {
      Service.updateDetail(editData._id, [
        { propName: "name", value: name },
        { propName: "desc", value: desc }
      ]).then(() => this.fetchList());
    }
  }

  onEdit(e, d) {
    e.preventDefault();
    this.setState({ name: d.name, desc: d.desc, editData: d });
  }

  onDelete(e, d) {
    e.preventDefault();
    Service.deleteDetail(d._id).then(res => {
      this.fetchList();
    });
  }

  render() {
    const { name, desc, data, editData } = this.state;

    return (
      <div>
        <ul className="table-slot">
          {data.map(d => (
            <li key={d._id}>
              <span>name : {d.name}</span>
              <span> desc : {d.desc}</span>
              <button
                onClick={e => {
                  this.onEdit(e, d);
                }}
              >
                Edit
              </button>
              <button
                onClick={e => {
                  this.onDelete(e, d);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="form">
          <div>
            Name :
            <input
              type="text"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            Desc :
            <input
              type="text"
              value={desc}
              onChange={e => this.setState({ desc: e.target.value })}
            />
          </div>
          <div>
            <button onClick={e => this.onSave(e)}>
              {editData ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
