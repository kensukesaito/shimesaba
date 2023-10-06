export const schema = `
schema {
  query: Query
  mutation: Mutation
}

"""
Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number
"""
scalar AccountNumber

"""
The \`BigInt\` scalar type represents non-fractional signed whole numeric values.
"""
scalar BigInt

type Book implements Node {
  author: String
  country: CountryCode
  createdAt: DateTime
  emailAddress: EmailAddress
  id: ID!
  isbn: ISBN
  phoneNumber: PhoneNumber
  title: String
  updatedAt: DateTime
  url: URL
}

type BookConnection {
  edges: [BookEdge!]!
  pageInfo: PageInfo!
}

type BookEdge {
  cursor: String!
  node: Book!
}

"""The \`Byte\` scalar type represents byte value as a Buffer"""
scalar Byte

"""A country code as defined by ISO 3166-1 alpha-2"""
scalar CountryCode

input CreateBookInput {
  author: String!
  clientMutationId: String
  country: CountryCode!
  emailAddress: EmailAddress
  isbn: ISBN!
  phoneNumber: PhoneNumber
  title: String!
  url: URL
}

type CreateBookPayload {
  book: Book
  clientMutationId: String
}

"""
A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down
"""
scalar Cuid @specifiedBy(url: "https://github.com/ericelliott/cuid#broken-down")

"""
A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217.
"""
scalar Currency @specifiedBy(url: "https://en.wikipedia.org/wiki/ISO_4217")

"""
A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/.
"""
scalar DID @specifiedBy(url: "https://www.w3.org/TR/did-core/")

"""
A date string, such as 2007-12-03, compliant with the \`full-date\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar Date

"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the \`date-time\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar DateTime

"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the \`date-time\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format.
"""
scalar DateTimeISO

input DeleteBookInput {
  clientMutationId: String
  id: ID!
}

type DeleteBookPayload {
  book: Book
  clientMutationId: String
}

"""
A field whose value conforms to the standard DeweyDecimal format as specified by the OCLC https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf
"""
scalar DeweyDecimal @specifiedBy(url: "https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf")

"""

    A string representing a duration conforming to the ISO8601 standard,
    such as: P1W1DT13H23M34S
    P is the duration designator (for period) placed at the start of the duration representation.
    Y is the year designator that follows the value for the number of years.
    M is the month designator that follows the value for the number of months.
    W is the week designator that follows the value for the number of weeks.
    D is the day designator that follows the value for the number of days.
    T is the time designator that precedes the time components of the representation.
    H is the hour designator that follows the value for the number of hours.
    M is the minute designator that follows the value for the number of minutes.
    S is the second designator that follows the value for the number of seconds.

    Note the time designator, T, that precedes the time value.

    Matches moment.js, Luxon and DateFns implementations
    ,/. is valid for decimal places and +/- is a valid prefix
  
"""
scalar Duration

"""
A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.
"""
scalar EmailAddress @specifiedBy(url: "https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address")

"""
A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
"""
scalar GUID

"""
A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla().
"""
scalar HSL @specifiedBy(url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla()")

"""
A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla().
"""
scalar HSLA

"""
A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors.
"""
scalar HexColorCode @specifiedBy(url: "https://en.wikipedia.org/wiki/Web_colors")

"""
A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal.
"""
scalar Hexadecimal

"""
A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number.
"""
scalar IBAN

"""
A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address.
"""
scalar IP

"""
A field whose value is an IPC Class Symbol within the International Patent Classification System: https://www.wipo.int/classifications/ipc/en/
"""
scalar IPCPatent @specifiedBy(url: "https://www.wipo.int/classifications/ipc/en/")

"""
A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4.
"""
scalar IPv4

"""
A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6.
"""
scalar IPv6

"""
A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number.
"""
scalar ISBN

"""

    A string representing a duration conforming to the ISO8601 standard,
    such as: P1W1DT13H23M34S
    P is the duration designator (for period) placed at the start of the duration representation.
    Y is the year designator that follows the value for the number of years.
    M is the month designator that follows the value for the number of months.
    W is the week designator that follows the value for the number of weeks.
    D is the day designator that follows the value for the number of days.
    T is the time designator that precedes the time components of the representation.
    H is the hour designator that follows the value for the number of hours.
    M is the minute designator that follows the value for the number of minutes.
    S is the second designator that follows the value for the number of seconds.

    Note the time designator, T, that precedes the time value.

    Matches moment.js, Luxon and DateFns implementations
    ,/. is valid for decimal places and +/- is a valid prefix
  
"""
scalar ISO8601Duration

"""
The \`JSON\` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON @specifiedBy(url: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf")

"""
The \`JSONObject\` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSONObject @specifiedBy(url: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf")

"""
A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction.
"""
scalar JWT

"""
A field whose value conforms to the Library of Congress Subclass Format ttps://www.loc.gov/catdir/cpso/lcco/
"""
scalar LCCSubclass @specifiedBy(url: "https://www.loc.gov/catdir/cpso/lcco/")

"""
A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude
"""
scalar Latitude

"""
A local date string (i.e., with no associated timezone) in \`YYYY-MM-DD\` format, e.g. \`2020-01-01\`.
"""
scalar LocalDate

"""
A local date-time string (i.e., with no associated timezone) in \`YYYY-MM-DDTHH:mm:ss\` format, e.g. \`2020-01-01T00:00:00\`.
"""
scalar LocalDateTime

"""
A local time string (i.e., with no associated timezone) in 24-hr \`HH:mm[:ss[.SSS]]\` format, e.g. \`14:25\` or \`14:25:06\` or \`14:25:06.123\`.  This scalar is very similar to the \`LocalTime\`, with the only difference being that \`LocalEndTime\` also allows \`24:00\` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block.
"""
scalar LocalEndTime

"""
A local time string (i.e., with no associated timezone) in 24-hr \`HH:mm[:ss[.SSS]]\` format, e.g. \`14:25\` or \`14:25:06\` or \`14:25:06.123\`.
"""
scalar LocalTime

"""The locale in the format of a BCP 47 (RFC 5646) standard string"""
scalar Locale

"""
The \`BigInt\` scalar type represents non-fractional signed whole numeric values.
"""
scalar Long

"""
A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude
"""
scalar Longitude

"""
A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address.
"""
scalar MAC

type Mutation {
  createBook(input: CreateBookInput!): CreateBookPayload
  deleteBook(input: DeleteBookInput!): DeleteBookPayload
  noop(input: NoopInput!): NoopPayload
  updateBook(input: UpdateBookInput!): UpdateBookPayload
}

"""Floats that will have a value less than 0."""
scalar NegativeFloat

"""Integers that will have a value less than 0."""
scalar NegativeInt

interface Node {
  id: ID!
}

"""A string that cannot be passed as an empty value"""
scalar NonEmptyString

"""Floats that will have a value of 0 or more."""
scalar NonNegativeFloat

"""Integers that will have a value of 0 or more."""
scalar NonNegativeInt

"""Floats that will have a value of 0 or less."""
scalar NonPositiveFloat

"""Integers that will have a value of 0 or less."""
scalar NonPositiveInt

input NoopInput {
  clientMutationId: String
}

type NoopPayload {
  clientMutationId: String
}

"""
A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c
"""
scalar ObjectID

type PageInfo {
  endCursor: String
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
}

"""
A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.
"""
scalar PhoneNumber

"""
A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports
"""
scalar Port

"""Floats that will have a value greater than 0."""
scalar PositiveFloat

"""Integers that will have a value greater than 0."""
scalar PositiveInt

"""
A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg.
"""
scalar PostalCode

type Query {
  book(id: ID!): Book
  books(after: String, before: String, first: Int, last: Int): BookConnection!
  node(id: ID!): Node
  nodes(ids: [ID!]!): [Node]!
}

"""
A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba().
"""
scalar RGB

"""
A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba().
"""
scalar RGBA

"""
In the US, an ABA routing transit number (\`ABA RTN\`) is a nine-digit code to identify the financial institution.
"""
scalar RoutingNumber @specifiedBy(url: "https://en.wikipedia.org/wiki/ABA_routing_transit_number")

"""
The \`SafeInt\` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification.
"""
scalar SafeInt @specifiedBy(url: "https://www.ecma-international.org/ecma-262/#sec-number.issafeinteger")

"""A field whose value is a Semantic Version: https://semver.org"""
scalar SemVer

"""
A time string at UTC, such as 10:15:30Z, compliant with the \`full-time\` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar Time

"""
A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones
"""
scalar TimeZone

"""
The javascript \`Date\` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch.
"""
scalar Timestamp

"""
A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.
"""
scalar URL

"""A currency string, such as $21.25"""
scalar USCurrency

"""
A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
"""
scalar UUID

"""Floats that will have a value of 0 or more."""
scalar UnsignedFloat

"""Integers that will have a value of 0 or more."""
scalar UnsignedInt

input UpdateBookInput {
  author: String!
  clientMutationId: String
  country: CountryCode!
  emailAddress: EmailAddress
  id: ID!
  isbn: ISBN!
  phoneNumber: PhoneNumber
  title: String!
  url: URL
}

type UpdateBookPayload {
  book: Book
  clientMutationId: String
}

"""
A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
"""
scalar UtcOffset

"""Represents NULL values"""
scalar Void
`
export default schema