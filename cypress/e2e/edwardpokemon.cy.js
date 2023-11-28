describe ('Покупка аватара', function () {

	it('Покупка нового аватара', function () {
		cy.visit('https://pokemonbattle.me/');
		cy.get(':nth-child(1) > .auth__input').type('podlipaev.eduard@yandex.ru');
		cy.get('#password').type('Diana9344');
		cy.get('.auth__button').click();
		cy.get('.header__btns > [href="/shop"]').click();
		cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
		cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555599');
		cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
		cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
		cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLNIKOV');
		cy.get('.pay-btn').click();
		cy.get('#cardnumber').type('56456');
		cy.get('.payment__submit-button').click();
		cy.get('.payment__font-for-success').should('be.visible');
		cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
		cy.get('.payment__adv').click();
	})
})

