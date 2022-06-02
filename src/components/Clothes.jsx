import React from 'react';
import { useFormik} from 'formik';
import { object, string, number } from 'yup';


function showInfo(values, {setSubmitting}){
    const {name, description, price, type} = values;
    alert(`
    Clothes: ${name},
    Description: ${description},
    Price: ${price},
    Type: ${type},
    `)
    setSubmitting(false);
}

export default function Form(){

    const schema = object().shape({
        name: string().min(2).required(),
        description: string(),
        price: number().min(50).max(500).positive(),
        type: string().required()
    })

    const formik = useFormik({
        initialValues:{
            name: '',
            description: '',
            price: '',
            type: '',
        },
        onSubmit: showInfo,
        validationSchema: schema,
        validateOnMount: true,
    })


    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Clothes
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                {!!formik.touched.name && !!formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}
                </label>
                <label htmlFor="description">Description
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                />
                {!!formik.touched.description && !!formik.errors.description && <span style={{ color: 'red' }}>{formik.errors.description}</span>}
                </label>
                <label htmlFor="price">Price
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    onBlur={formik.handleBlur}
                />
                {!!formik.touched.price && !!formik.errors.price && <span style={{ color: 'red' }}>{formik.errors.price}</span>}
                </label>
                <label htmlFor="type">Type
                <select
                   id="type"
                   name="type"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.type}
                   onBlur={formik.handleBlur}
                >
                    <option value="" label="Select a type" />
                    <option value="T-shirt" label="T-shirt" />
                    <option value="Jeans" label="Jeans" />
                    <option value="Sweatshirt" label="Sweatshirt" />
                </select>
                {!!formik.touched.type && !!formik.errors.type && <span style={{ color: 'red' }}>{formik.errors.type}</span>}
                </label>

                <button type="submit" disabled={!formik.isValid && !formik.isSubmitting}>Submit</button>
            </form>
        </div>
    )
}