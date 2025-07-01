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
