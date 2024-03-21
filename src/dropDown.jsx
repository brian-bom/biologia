import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";


class MultipleDropdownPage extends React.Component {
    constructor(props) {
      super(props)
      this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.state = {
           hoveredEl: -1
    }
    }
    
      handleMouseOver(e) {
      e.stopPropagation();
      if(e.target.className.indexOf("dropdown-lista") === -1){
      this.setState({ hoveredEl: e.target.className });
      }     
    }
    
    handleMouseLeave(e) {
      e.preventDefault();
      
      this.setState({ hoveredEl: -1 })
    };
    
    render() {
      return (
        <div>
            <div className="assuntos">
                <button className="frenteA" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}
                >Frente A <span className='caret'> </span>
                    {this.state.hoveredEl == "frenteA" &&
                        <ul className="dropdown-lista">
                            <li> Água e Sais Minerais </li>
                            <li> Aminoácidos, Proteínas e Enzimas </li>
                            <li> Lipídios e Carboidratos </li>
                            <li> Nucleotídeos, Ácidos Nucleicos, ATP e Vitaminas </li>
                        </ul>
                    }
                </button>
                <button className="frenteB" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}
                >Frente B <span className='caret'> </span>
                    {this.state.hoveredEl == "frenteB" &&
                        <ul className="dropdown-lista">
                            <li> Virus e Viroses </li>
                            <li> Taxonomia e Sistemática </li>
                            <li> Bactérias e Protozooses </li>
                        </ul>
                    }
                </button>

                <button className="frenteC" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}
                >Frente C <span className='caret'> </span>
                {this.state.hoveredEl == "frenteC" &&
                    <ul className="dropdown-lista">
                        <li> Síntese de Proteínas </li>
                        <li> Genética: Conceitos Fundamentais </li>
                        <li> Leis de Mendel e Herança dos Cromossomos Sexuais </li>
                        <li> Interação Gênica e Herança dos Grupos Sanguíneos </li>
                    </ul>
                }
                </button>
            </div>
        </div>
        )
    }
  }

export default MultipleDropdownPage;