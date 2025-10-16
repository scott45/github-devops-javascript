name: Failing Test  
   description: Report a failing automated test in the CI pipeline  
   body:  
     - type: textarea  
       id: test-description  
       attributes:  
         label: Test Description  
         placeholder: Which test is failing? (e.g., test name, file, or CI job)  
       validations:  
         required: true  
     - type: textarea  
       id: reproduction  
       attributes:  
         label: Steps to Reproduce  
         placeholder: How can the failure be reproduced locally or in CI?  
     - type: input  
       id: ci-link  
       attributes:  
         label: CI Run Link  
         placeholder: URL to the failing GitHub Actions run (if applicable)  
     - type: dropdown  
       id: labels  
       attributes:  
         label: Labels  
         options: [bug, test-failure]
