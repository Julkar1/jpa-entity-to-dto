function convertToDto() {
    const jpaEntity = document.getElementById("jpaEntity").value;
    if (!jpaEntity.trim()) {
        document.getElementById("dtoFields").value = "Please enter JPA entity fields.";
        return;
    }

    const lines = jpaEntity.split("\n");
    let dtoFields = "";
    const processedRelations = new Set();

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Skip empty lines and non-field lines
        if (!line || line.startsWith("//") || line.startsWith("/*") || line.startsWith("*")) {
            continue;
        }

        // Check if this line starts a field declaration
        if (line.startsWith("@Column") || line.startsWith("@ManyToOne") || line.startsWith("@Id") || 
            line.startsWith("@OneToMany") || line.startsWith("@OneToOne")) {
            
            // Find the actual field declaration (might be on next line)
            let fieldLine = "";
            for (let j = i; j < lines.length; j++) {
                if (lines[j].trim().startsWith("private")) {
                    fieldLine = lines[j].trim();
                    i = j; // Skip ahead
                    break;
                }
            }

            if (!fieldLine) continue;

            const fieldInfo = extractFieldInfo(fieldLine);
            if (!fieldInfo) continue;

            // Handle relationships
            if (line.includes("@ManyToOne") || line.includes("@OneToOne")) {
                const relationName = fieldInfo.type.replace(/Draft$/, "");
                const relationId = `${fieldInfo.name}Id`;
                const relationNameField = `${fieldInfo.name}Name`;

                if (!processedRelations.has(fieldInfo.name)) {
                    dtoFields += `    private Integer ${relationId};\n`;
                    dtoFields += `    private String ${relationNameField};\n`;
                    processedRelations.add(fieldInfo.name);
                }
            } 
            // Handle regular columns
            else {
                dtoFields += `    private ${fieldInfo.type} ${fieldInfo.name};\n`;
            }
        }
    }

    document.getElementById("dtoFields").value = dtoFields;
    copyToClipboard(dtoFields);
}

function extractFieldInfo(fieldLine) {
    // Remove annotations, modifiers, and semicolon
    const cleanedLine = fieldLine
        .replace(/@\w+(\([^)]*\))?/g, '') // Remove annotations
        .replace(/\b(public|protected|private|static|final|transient|volatile)\b/g, '') // Remove modifiers
        .replace(/;/, '') // Remove semicolon
        .trim();

    // Match type and name
    const match = cleanedLine.match(/^([\w<>]+)\s+(\w+)$/);
    if (!match || match.length < 3) return null;

    return {
        type: match[1],
        name: match[2]
    };
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.getElementById("tooltipText");
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = 1;
        setTimeout(() => {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = 0;
        }, 2000);
    });
}