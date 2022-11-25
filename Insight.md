

## Overview
1. ## CSS
   ## desktop ui
   flex display: row
   - card
   - card--comment 
   - card--reply   - reduces or increases the `width` of the card depending on the class assigned
   - card__vote
    - card__vote__item
    - card__sign
      - :hover
    - card__number
   - card__info
     - card__header
       - card__author
         - card__avatar
         - card__username
         - card__date
     - card__content
       - :focus
       - card__replyingTo
     - card__actions
         - card__action
         - card__action--blue
           - :hover
         - card__action--red
           - :hover
     - card-btn
       - :hover

    - card__form (cr - comment reply)
      - card__form__img
      - card__form__content

    ## mobile ui
    flex display: column

    ## styling system
    Styled components
   
    ## breakpoints for devices
    for mobile - 375px
    for desktop - 1440px


2. ## React
    - Components
     **ui**
     - Card
       - Vote
       - Info
       - Actions
       - Buttons
     - Card_form

     **logic**
     - Integrating context api
     - using axios for api calls

3. ## Backend - Express
    - Integrating mongodb
    - create routes for handling CRUD operations
    - building models for comments and replies