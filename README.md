# JPA Entity to DTO Converter

A web-based tool that automatically converts JPA entity classes into flattened DTO (Data Transfer Object) structures with proper field mappings.

🔗 **Live Demo**:

![image](https://github.com/user-attachments/assets/05f82553-6b06-4acd-a7b5-6ffc1533a4a0)



## Features

- Converts JPA entities with complex relationships to simple DTO structures
- Automatically transforms `@ManyToOne` relationships to ID/Name pairs
- Handles all standard JPA annotations (`@Column`, `@Id`, `@JoinColumn`, etc.)
- Preserves original field types while flattening relationships
- Clean, intuitive single-column interface
- One-click copy to clipboard functionality

## How It Works

1. **Paste** your JPA entity code in the input area
2. **Click** the convert button
3. **Get** perfectly formatted DTO fields
4. **Copy** with one click to use in your project

Hosting: Vercel

Version Control: GitHub

Installation
No installation needed! Just use the live demo link above.

For local development:

Clone this repository

Open index.html in any modern browser


## Why This Tool?
Saves time converting complex JPA entities to DTOs

Eliminates manual errors in field mapping

Standardizes DTO structure across your project

Free and open-source alternative to paid tools

## Contributing
Contributions are welcome! Please:

Fork the repository

Create your feature branch

Commit your changes

Push to the branch

Open a pull request

## License
This project is Free to use.

## Support
If you find this tool useful, please consider giving it a ⭐ on GitHub!

### Conversion Example

**Input (JPA Entity):**
```java
@ManyToOne
@JoinColumn(name = "EMPLOYEEINFOID")
private EmployeeInfoDraft employeeInfo;

@Column(name="PASSINGYEAR")
private Integer passingYear;
Output (DTO Fields):

java
private Integer employeeInfoId;
private String employeeInfoName;
private Integer passingYear;
Technology Stack
Frontend: HTML5, CSS3, Vanilla JavaScript
