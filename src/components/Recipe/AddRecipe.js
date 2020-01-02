import React, { Component } from 'react'
const Categories = ["Breakfast", "Lunch", "Dinner", "Snack"]

export class AddRecipe extends Component {
    render() {
        return (
            <div className="App flexer" style={{ flexDirection: 'column' }}>
                <h2 className="App">
                    Add Recipe
                </h2>
                <form className="form" style={{ width: "50%" }}>
                    <input
                        style={{ width: "100%" }}
                        type="text"
                        name="recipe"
                        onChange={this.handleChange}
                        placeholder="Recipe Name"
                    />

                    <select style={{ width: "100%" }} name="category" onChange={this.handleChange}>
                        {Categories.map(category => <option value={category}>{category}</option>)}
                    </select>

                    <input
                        type="text"
                        style={{ width: "100%" }}
                        name="description"
                        onChange={this.handleChange}
                        placeholder="Add Description"
                    />

                    <textarea
                        name="instructions"
                        style={{ width: "100%" }}
                        onChange={this.handleChange}
                        placeholder="Add Instructions"
                    />

                    <button style={{ width: "100%" }} type="submit" className="button-primary">Submit</button>
                </form>

            </div>
        )
    }
}



export default AddRecipe
