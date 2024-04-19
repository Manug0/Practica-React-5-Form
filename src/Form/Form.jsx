import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			userName: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Usuario: </label>
				<input
					{...register("userName", {
						required: "Por favor introduce un nombre de usuario",
					})}
					type="text"
					id="userName"
				/>
				{errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}
			</div>
			<div>
				<label>Correo electrónico: </label>
				<input
					{...register("email", {
						required: "Correo electrónico incorrecto",
						pattern: {
							value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: "Correo electrónico incorrecto",
						},
					})}
					type="text"
					id="email"
				/>
				{errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
			</div>
			<div>
				<label>Constraseña: </label>
				<input
					{...register("password", {
						required: "La contraseña es obligatoria",
						pattern: {
							value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
							message: "La contraseña debe incluir una letra minúscula, una mayúscula y un número",
						},
					})}
					type="password"
					id="password"
				/>
				{errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
			</div>
			<button type="submit">Registrarse</button>
		</form>
	);
};

export default Form;
