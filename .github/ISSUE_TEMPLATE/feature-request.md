name: Feature Request  
   description: Suggest a new feature for the project  
   body:  
     - type: textarea  
       id: feature-description  
       attributes:  
         label: Feature Description  
         placeholder: What feature would you like to see? (e.g., new API endpoint)  
       validations:  
         required: true  
     - type: textarea  
       id: use-case  
       attributes:  
         label: Use Case  
         placeholder: How would this feature be used? Who benefits?  
     - type: dropdown  
       id: labels  
       attributes:  
         label: Labels  
         options: [enhancement, feature]
