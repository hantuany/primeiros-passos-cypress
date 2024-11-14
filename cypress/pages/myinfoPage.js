class MyInfoPage{
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            textField: ".oxd-select-text--active"
        }

        return selectors
    }

    changeInfoAction() {
        
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorsList().lastNameField).clear().type('LastNameTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('EmployeeId')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriversLicenseTest')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().textField).eq(0).click()
        cy.contains('Brazilian').click()
        cy.get(this.selectorsList().textField).eq(1).click()
        cy.contains('Married').click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage