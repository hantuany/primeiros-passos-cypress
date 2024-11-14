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

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        

    }

    fillEmployeeDetails(employeeId, OtherId, DriversLicense, Date) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(Date)
        cy.get(this.selectorsList().dateCloseButton).click()
        
    }

    fillStatus(nationality, relationship) {
        cy.get(this.selectorsList().textField).eq(0).click()
        cy.contains(nationality).click()
        cy.get(this.selectorsList().textField).eq(1).click()
        cy.contains(relationship).click()

    }

    saveForm() {      
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

    }
}

export default MyInfoPage