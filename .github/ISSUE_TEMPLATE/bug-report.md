name: Bug Report
     description: File a bug
     body:
       - type: textarea
         id: description
         attributes:
           label: Describe the bug
           placeholder: What went wrong?
       - type: dropdown
         id: labels
         attributes:
           label: Type
           options: [bug, enhancement]
           