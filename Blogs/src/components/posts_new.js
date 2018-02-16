import React , { Component } from 'react';
import { Field, reduxForm, values } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{
    renderFields(field){
        const { meta:{ touched, error } } = field;
        const className = `form-group ${ touched && error? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{ field.label }</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
            
        );

       
    }
    onSubmit(values){
        this.props.createPost(values,() => {
            this.props.history.push("/");
        });
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Field 
                    label="Title For Post"
                    name="title" 
                    component={this.renderFields} 
                />

                <Field 
                    label="Categories"
                    name="categories" 
                    component={this.renderFields} 
                />

                <Field 
                    label="Post Content"
                    name="content" 
                    component={this.renderFields} 
                />

                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "Please insert Titile";
    }
    if(!values.categories){
        errors.categories = "Please enter categories";
    }
    if(!values.content){
        errors.content = "Please enter some content";
    }

    return errors;
}

export default reduxForm({
    validate,
    form:'PostNewForm'
})(
   connect(null, {createPost} )(PostsNew)
);