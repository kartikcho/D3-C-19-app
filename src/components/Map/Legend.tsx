import React from 'react'

type Props = {
    colors: string[],
    fields: string[],
    query: string,
    handleSelectLegend: (query: string) => void
}

export default function Legend({ colors, fields, query, handleSelectLegend }: Props) {
    return (
        <div className="legend">
            {fields.map((field, index) => (
                <div
                    className="legend-field"
                    key={index}
                    onClick={() => handleSelectLegend(field)}
                >
                    <div
                        className={`legend-icon ${
                            query === field ? 'legend-icon-active' : ''
                        }`}
                        style={{
                            backgroundColor: colors[index],
                        }}
                    />
                    <div
                        className={`legend-label ${
                            query === field ? 'legend-label-active' : ''
                        }`}
                    >
                        {field}
                    </div>
                </div>
            ))}
        </div>
    )
}
