describe ('Проверка авторизации', function () {

	it('Верный логин, верный пароль', function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
		cy.get('#loginButton').click(); // клик кнопка войти
		cy.get('#messageHeader').should('be.visible'); // видно слово
		cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
	})

	it('Восстановление пароля', function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#forgotEmailButton').should('be.enabled') // кнопка восстановления пароля активна
		cy.get('#forgotEmailButton').click(); // 'нажать забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click(); // нажать "отправить код"
        cy.get('#messageHeader').should('be.visible'); // видим текст
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
	})

	it('Верный логин, неверный пароль', function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio111');
		cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
		cy.get('#loginButton').click(); // клик кнопка войти
		cy.get('#messageHeader').should('be.visible') // видим текст
		cy.get('#messageHeader').contains('Такого логина или пароля нет') // текст совпадает
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
	})

	it('Неверный логин, верный пароль', function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
		cy.get('#mail').type('German@dolnikoF.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
		cy.get('#loginButton').click(); // клик кнопка войти
		cy.get('#messageHeader').should('be.visible'); // видно слово
		cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
	})

	it('Логин без @, верный пароль', function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
		cy.get('#mail').type('germandolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
		cy.get('#loginButton').click(); // клик кнопка войти
		cy.get('#messageHeader').should('be.visible'); // видно слово
		cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
	})

	it('Авторизация со строчными буквами в логине', function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
		cy.get('#mail').type('GerMan@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
		cy.get('#loginButton').click(); // клик кнопка войти
		cy.get('#messageHeader').should('be.visible'); // видно слово
		cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
		cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
	})
})

