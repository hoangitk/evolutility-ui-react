var contact_LOVs = {

    categories: [
        {id: '1', text: 'Work'},
        {id: '2', text: 'Fun'},
        {id: '3', text: 'Travel'},
        {id: '4', text: 'Business'},
        {id: '5', text: 'Cars'},
        {id: '6', text: 'Sport'},
        {id: '7', text: 'Misc.'}
    ] 
};

module.exports = {
    id: 'contact',
    label: 'Address Book',
    icon: 'contact.gif',
    name: 'contact', namePlural: 'contacts',/*
    fnTitle: function(model){
        return model.get('firstname')+' '+model.get('lastname');
    },*/
    searchFields: ['lastname', 'firstname', 'jobtitle', 'company'],

    fields:[
        {
            type: 'text', id: 'lastname', attribute: 'lastname', 
            label: 'Lastname', maxLength: 50,
            required: true, width: 62, inMany: true
        },
        {
            type: 'text', id: 'firstname', attribute: 'firstname', 
             label: 'Firstname', maxLength: 50,
            required: true, width: 38, inMany: true
        },
        {
            type: 'text', id: 'jobtitle', attribute: 'jobtitle', 
             label: 'Title', maxLength: 50,
            width: 62
        },
        {
            type: 'text', id: 'company', attribute: 'company', 
             label: 'Company', maxLength: 50,
            width: 38, inMany: true
        },
        {
            type: 'email', id: 'email', attribute: 'email', 
             label: 'email', maxLength: 255,
            width: 100 
        },
        {
            type: 'url', id: 'web', attribute: 'web', 
             label: 'web', maxLength: 255, width: 100
        },
        {
            type: 'lov', id: 'category', attribute: 'category', 
             label: 'Category', width: 100,
            inMany: true,
            list: contact_LOVs.categories, 
            lovtable: 'contact_category'
        },
        {
            type: 'text', id: 'phone', attribute: 'phone', 
             label: 'Work Phone', maxLength: 20, width: 100, mini:'1'
        },
        {
            type: 'text', id: 'phonehome', attribute: 'phonehome', 
             label: 'Home Phone', maxLength: 20, width: 100
        },
        {
            type: 'text', id: 'phonecell', attribute: 'phonecell', 
             label: 'Cell.', maxLength: 20, width: 100, mini:'1'
        },
        {
            type: 'text', id: 'fax', attribute: 'fax', 
             label: 'Fax', maxLength: 20, width: 100
        },
        {
            type: 'text', id: 'address1', attribute: 'address1', 
             label: 'Address', maxLength: 150, width: 100
        },
        {
            type: 'text', id: 'address2', attribute: 'address2', 
             label: '', labelMany: 'Address 2', maxLength: 150, width: 100
        },
        {
            type: 'text', id: 'city', attribute: 'city', 
             label: 'City', maxLength: 100, width: 62
        },
        {
            type: 'text', id: 'state', attribute: 'state', 
             label: 'State', width: 23,
            //list: contact_LOVs.states
        },
        {
            type: 'text', id: 'zip', attribute: 'zip', 
             label: 'Zip', maxLength: 12, width: 15
        },
        {
            type: 'text', id: 'country', attribute: 'country', 
             label: 'Country', maxLength: 60, width: 100,
            //list: contact_LOVs.countries
        },
        {
            type: 'textmultiline', id: 'notes', attribute: 'notes', 
             label: 'Notes', maxLength: 1000, width: 15, height: 6
        }
    ],

    groups: [
        {
            type: 'panel', label: 'Identity', width: 62,
            fields: ['lastname', 'firstname', 'jobtitle', 'company', 'email', 'web']
        },
        {
            type: 'panel', label: 'Contact Info', width: 38,
            fields: ['phone', 'phonehome', 'phonecell', 'fax']
        },
        {
            type: 'panel', label: 'Address', width: 62,
            fields: ['address1', 'address2', 'city', 'state', 'zip', 'country']
        },
        {
            type: 'panel', label: 'Misc.', width: 38,
            fields: ['category','notes']
        }
    ]
}

