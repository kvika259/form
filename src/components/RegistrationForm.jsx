import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data =>
    alert(
      `Успешно зарегистрировано ${JSON.stringify(data, ["name", "email"], 2)}`,
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Имя пользователя:</label>
        <input
          id="name"
          {...register("name", { required: `Поле обязательно к заполнению` })}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          {...register("email", {
            required: `Поле обязательно к заполнению`,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          {...register("password", {
            required: `Поле обязательно к заполнению`,
            minLength: {
              value: 6,
              message: "Минимальная длина пароля - 6 символов",
            },
            pattern: {
              value: /(?=.*[A-ZА-ЯЁ])/,
              message: "Должна быть 1 заглавная буква",
            },
          })}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="passwordRepeat">Подтверждение пароля:</label>
        <input
          id="passwordRepeat"
          {...register("passwordRepeat", {
            required: `Поле обязательно к заполнению`,
            validate: (value, allValues) => {
              if (value !== allValues.password) {
                return "Пароли не совпадают";
              }
            },
          })}
        />
        {errors.passwordRepeat && (
          <span style={{ color: "red" }}>{errors.passwordRepeat.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="birthday">Дата рождения:</label>
        <input
          id="birthday"
          {...register("birthday", {
            required: `Поле обязательно к заполнению`,
          })}
        />
        {errors.birthday && (
          <span style={{ color: "red" }}>{errors.birthday.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="gender">Пол:</label>
        <select
          id="gender"
          {...register("gender", {
            required: `Поле обязательно к заполнению`,
          })}>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        {errors.gender && (
          <span style={{ color: "red" }}>{errors.gender.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="phone">Номер телефона:</label>
        <input
          id="phone"
          {...register("phone", { required: `Поле обязательно к заполнению` })}
        />
        {errors.phone && (
          <span style={{ color: "red" }}>{errors.phone.message}</span>
        )}
      </div>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
export default RegistrationForm;
