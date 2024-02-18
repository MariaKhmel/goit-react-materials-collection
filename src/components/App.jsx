import { Component } from "react";
import { MaterialEditorForm } from "./MaterialEditorForm";
import { Materials } from "./Materials";
import * as API from './api'

export class App extends Component {
  state = {
    materials: [],
    isLoading:false,
  } 

  async componentDidMount() {
    try {
      this.setState({isLoading:true})
 const materials = await API.getMaterials();
    this.setState({ materials , isLoading:false});
    } catch (error) {
      console.log(error)
    }

  }
  
  addMaterials = async (values) => {
    try {
          this.setState({isLoading:true})
    const material = await API.addmaterial(values);
    this.setState(prevState =>({materials:[...prevState.materials, material], isLoading:false}))
 
    } catch (error) {
      console.log(error);
}
  }

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);

      this.setState(prevState => ({
        materials: prevState.materials.filter(material => (
          material.id !== id
        ))
      }))
    } catch (error) {
      console.log(error)
    }
  }
  
  updateMaterial = async fields => {
     try {
    const updatedMaterial = await API.updateMaterials(fields);
    this.setState(prevState => ({
      materials: prevState.materials.map(
      material=>material.id===fields.id?updatedMaterial:material
    )}))} catch (error) {
      console.log(error)
    }
  }

  render() { 
    const { isLoading, materials } = this.state;
    return (

      <>
        <MaterialEditorForm onFormSubmit={this.addMaterials}
          isSumbitting={isLoading} />
        {isLoading && (<p>Loading...</p>)}
        <Materials
          items={materials}
          onDelete={this.deleteMaterial}
          onUpdate={this.updateMaterial} />
      </>
    );
  }
}
 

