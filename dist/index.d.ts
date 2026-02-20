//#region node_modules/.pnpm/@jsr+deno__doc@0.193.0_patch_hash=9e2413364fbb4f82b21f084dbf3abb5df6b03eb5344ffd581b6d7dec1be5af3e/node_modules/@jsr/deno__doc/types.d.ts
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
type DocNode = DocNodeModuleDoc | DocNodeFunction | DocNodeVariable | DocNodeEnum | DocNodeClass | DocNodeTypeAlias | DocNodeNamespace | DocNodeInterface | DocNodeImport | DocNodeReference;
/** Indicates how the documentation node was declared. `"private"` indicates
 * the node is un-exported. `"export"` indicates it is exported from the current
 * module. `"declare"` indicates that it is a type only declaration. */
type DeclarationKind = "private" | "export" | "declare";
interface DocNodeBase {
  kind: DocNodeKind;
  name: string;
  location: Location;
  declarationKind: DeclarationKind;
  jsDoc?: JsDoc;
  isDefault?: boolean;
}
type DocNodeKind = "moduleDoc" | "function" | "variable" | "enum" | "class" | "typeAlias" | "namespace" | "interface" | "import" | "reference";
interface DocNodeModuleDoc extends DocNodeBase {
  kind: "moduleDoc";
  jsDoc: JsDoc;
}
interface DocNodeFunction extends DocNodeBase {
  kind: "function";
  functionDef: FunctionDef;
}
interface DocNodeVariable extends DocNodeBase {
  kind: "variable";
  variableDef: VariableDef;
}
interface DocNodeEnum extends DocNodeBase {
  kind: "enum";
  enumDef: EnumDef;
}
interface DocNodeClass extends DocNodeBase {
  kind: "class";
  classDef: ClassDef;
}
interface DocNodeTypeAlias extends DocNodeBase {
  kind: "typeAlias";
  typeAliasDef: TypeAliasDef;
}
interface DocNodeNamespace extends DocNodeBase {
  kind: "namespace";
  namespaceDef: NamespaceDef;
}
interface DocNodeInterface extends DocNodeBase {
  kind: "interface";
  interfaceDef: InterfaceDef;
}
interface DocNodeImport extends DocNodeBase {
  kind: "import";
  importDef: ImportDef;
}
interface DocNodeReference extends DocNodeBase {
  kind: "reference";
  reference_def: ReferenceDef;
}
type Accessibility = "public" | "protected" | "private";
interface ClassDef {
  defName?: string;
  isAbstract: boolean;
  constructors: ClassConstructorDef[];
  properties: ClassPropertyDef[];
  indexSignatures: ClassIndexSignatureDef[];
  methods: ClassMethodDef[];
  extends?: string;
  implements: TsTypeDef[];
  typeParams: TsTypeParamDef[];
  superTypeParams: TsTypeDef[];
  decorators?: DecoratorDef[];
}
type ClassConstructorParamDef = ParamDef & {
  accessibility?: Accessibility;
  isOverride?: boolean;
  readonly?: boolean;
};
interface ClassConstructorDef {
  jsDoc?: JsDoc;
  accessibility?: Accessibility;
  isOptional?: boolean;
  hasBody?: boolean;
  name: string;
  params: ClassConstructorParamDef[];
  location: Location;
}
interface ClassIndexSignatureDef {
  readonly: boolean;
  params: ParamDef[];
  tsType?: TsTypeDef;
}
interface ClassMethodDef {
  jsDoc?: JsDoc;
  accessibility?: Accessibility;
  optional: boolean;
  isAbstract: boolean;
  isStatic: boolean;
  isOverride?: boolean;
  name: string;
  kind: MethodKind;
  functionDef: FunctionDef;
  location: Location;
}
interface ClassPropertyDef {
  jsDoc?: JsDoc;
  tsType?: TsTypeDef;
  readonly: boolean;
  accessibility?: Accessibility;
  optional: boolean;
  isAbstract: boolean;
  isStatic: boolean;
  isOverride?: boolean;
  name: string;
  decorators?: DecoratorDef[];
  location: Location;
}
interface DecoratorDef {
  name: string;
  args?: string[];
  location: Location;
}
interface EnumDef {
  members: EnumMemberDef[];
}
interface EnumMemberDef {
  name: string;
  init?: TsTypeDef;
  jsDoc?: JsDoc;
  location: Location;
}
interface FunctionDef {
  defName?: string;
  params: ParamDef[];
  returnType?: TsTypeDef;
  hasBody?: boolean;
  isAsync: boolean;
  isGenerator: boolean;
  typeParams: TsTypeParamDef[];
  decorators?: DecoratorDef[];
}
interface ImportDef {
  src: string;
  imported?: string;
}
interface InterfaceDef {
  defName?: string;
  extends: TsTypeDef[];
  methods: InterfaceMethodDef[];
  properties: InterfacePropertyDef[];
  callSignatures: InterfaceCallSignatureDef[];
  indexSignatures: InterfaceIndexSignatureDef[];
  typeParams: TsTypeParamDef[];
  constructors?: unknown[];
}
interface InterfaceCallSignatureDef {
  location: Location;
  jsDoc?: JsDoc;
  params: ParamDef[];
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}
interface InterfaceIndexSignatureDef {
  readonly: boolean;
  params: ParamDef[];
  tsType?: TsTypeDef;
}
interface InterfaceMethodDef {
  name: string;
  kind: MethodKind;
  location: Location;
  jsDoc?: JsDoc;
  computed?: boolean;
  optional: boolean;
  params: ParamDef[];
  returnType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}
interface InterfacePropertyDef {
  name: string;
  location: Location;
  jsDoc?: JsDoc;
  params: ParamDef[];
  readonly?: boolean;
  computed: boolean;
  optional: boolean;
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}
interface ReferenceDef {
  target: Location;
}
interface JsDoc {
  doc?: string;
  tags?: JsDocTag[];
}
type JsDocTagKind = "callback" | "category" | "constructor" | "default" | "deprecated" | "enum" | "example" | "extends" | "ignore" | "module" | "param" | "public" | "private" | "property" | "protected" | "readonly" | "return" | "tags" | "template" | "this" | "typedef" | "type" | "see" | "throws" | "unsupported";
type JsDocTag = JsDocTagOnly | JsDocTagDoc | JsDocTagDocRequired | JsDocTagNamed | JsDocTagValued | JsDocTagTyped | JsDocTagNamedTyped | JsDocTagParam | JsDocTagReturn | JsDocTagModule | JsDocTagThrows | JsDocTagTags | JsDocTagUnsupported;
interface JsDocTagBase {
  kind: JsDocTagKind;
}
interface JsDocTagOnly extends JsDocTagBase {
  kind: "constructor" | "ignore" | "public" | "private" | "protected" | "readonly";
}
interface JsDocTagDoc extends JsDocTagBase {
  kind: "deprecated";
  doc?: string;
}
interface JsDocTagDocRequired extends JsDocTagBase {
  kind: "category" | "example" | "see";
  doc: string;
}
interface JsDocTagNamed extends JsDocTagBase {
  kind: "callback" | "template";
  name: string;
  doc?: string;
}
interface JsDocTagValued extends JsDocTagBase {
  kind: "default";
  value: string;
  doc?: string;
}
interface JsDocTagTyped extends JsDocTagBase {
  kind: "enum" | "extends" | "this" | "type";
  type: string;
  doc?: string;
}
interface JsDocTagNamedTyped extends JsDocTagBase {
  kind: "property" | "typedef";
  name: string;
  type: string;
  doc?: string;
}
interface JsDocTagParam extends JsDocTagBase {
  kind: "param";
  name: string;
  type?: string;
  optional?: true;
  default?: string;
  doc?: string;
}
interface JsDocTagReturn extends JsDocTagBase {
  kind: "return";
  type?: string;
  doc?: string;
}
interface JsDocTagThrows extends JsDocTagBase {
  kind: "throws";
  type?: string;
  doc: string;
}
interface JsDocTagModule extends JsDocTagBase {
  kind: "module";
  name?: string;
}
interface JsDocTagTags extends JsDocTagBase {
  kind: "tags";
  tags: string[];
}
interface JsDocTagUnsupported extends JsDocTagBase {
  kind: "unsupported";
  value: string;
}
interface LiteralCallSignatureDef {
  params: ParamDef[];
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
}
type LiteralDefKind = "number" | "string" | "template" | "boolean" | "bigInt";
type LiteralDef = LiteralDefNumber | LiteralDefBigInt | LiteralDefString | LiteralDefTemplate | LiteralDefBoolean;
interface LiteralDefBase {
  kind: LiteralDefKind;
}
interface LiteralDefNumber extends LiteralDefBase {
  kind: "number";
  number: number;
}
interface LiteralDefBigInt extends LiteralDefBase {
  kind: "bigInt";
  string: string;
}
interface LiteralDefString extends LiteralDefBase {
  kind: "string";
  string: string;
}
interface LiteralDefTemplate extends LiteralDefBase {
  kind: "template";
  tsTypes: TsTypeDef[];
}
interface LiteralDefBoolean extends LiteralDefBase {
  kind: "boolean";
  boolean: boolean;
}
interface LiteralIndexSignatureDef {
  readonly: boolean;
  params: ParamDef[];
  tsType?: TsTypeDef;
  location?: Location;
}
interface LiteralMethodDef {
  name: string;
  kind: MethodKind;
  params: ParamDef[];
  computed?: boolean;
  optional: boolean;
  returnType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
  location?: Location;
}
interface LiteralPropertyDef {
  name: string;
  params: ParamDef[];
  readonly?: boolean;
  computed: boolean;
  optional: boolean;
  tsType?: TsTypeDef;
  typeParams: TsTypeParamDef[];
  location?: Location;
}
interface Location {
  filename: string;
  line: number;
  col: number;
  byteIndex?: number;
}
type MethodKind = "method" | "getter" | "setter";
interface NamespaceDef {
  elements: DocNode[];
}
type ObjectPatPropDef = ObjectPatPropAssignDef | ObjectPatPropKeyValueDef | ObjectPatPropRestDef;
interface ObjectPatPropAssignDef {
  kind: "assign";
  key: string;
  value?: string;
}
interface ObjectPatPropKeyValueDef {
  kind: "keyValue";
  key: string;
  value: ParamDef;
}
interface ObjectPatPropRestDef {
  kind: "rest";
  arg: ParamDef;
}
type ParamDef = ParamArrayDef | ParamAssignDef | ParamIdentifierDef | ParamObjectDef | ParamRestDef;
interface ParamArrayDef {
  kind: "array";
  elements: (ParamDef | undefined)[];
  optional: boolean;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}
interface ParamAssignDef {
  kind: "assign";
  left: ParamDef;
  right: string;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}
interface ParamIdentifierDef {
  kind: "identifier";
  name: string;
  optional: boolean;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}
interface ParamObjectDef {
  kind: "object";
  props: ObjectPatPropDef[];
  optional: boolean;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}
interface ParamRestDef {
  kind: "rest";
  arg: ParamDef;
  decorators?: DecoratorDef[];
  tsType?: TsTypeDef;
}
type TruePlusMinus = true | "+" | "-";
interface TsConditionalDef {
  checkType: TsTypeDef;
  extendsType: TsTypeDef;
  trueType: TsTypeDef;
  falseType: TsTypeDef;
}
interface TsFnOrConstructorDef {
  constructor: boolean;
  tsType: TsTypeDef;
  params: ParamDef[];
  typeParams: TsTypeParamDef[];
}
interface TsImportTypeDef {
  specifier: string;
  qualifier?: string;
  typeParams?: TsTypeDef[];
}
interface TsIndexedAccessDef {
  readonly: boolean;
  objType: TsTypeDef;
  indexType: TsTypeDef;
}
interface TsInferDef {
  typeParam: TsTypeParamDef;
}
interface TsMappedTypeDef {
  readonly?: TruePlusMinus;
  typeParam: TsTypeParamDef;
  nameType?: TsTypeDef;
  optional?: TruePlusMinus;
  tsType?: TsTypeDef;
}
interface TsTypeLiteralDef {
  methods: LiteralMethodDef[];
  properties: LiteralPropertyDef[];
  callSignatures: LiteralCallSignatureDef[];
  indexSignatures: LiteralIndexSignatureDef[];
  constructors?: unknown[];
}
interface TsTypeOperatorDef {
  operator: string;
  tsType: TsTypeDef;
}
interface TsTypeParamDef {
  name: string;
  constraint?: TsTypeDef;
  default?: TsTypeDef;
}
interface TsTypePredicateDef {
  asserts: boolean;
  param: {
    type: "this" | "identifier";
    name?: string;
  };
  type?: TsTypeDef;
}
type TsTypeDef = TsTypeKeywordDef | TsTypeDefLiteral | TsTypeTypeRefDef | TsTypeUnionDef | TsTypeIntersectionDef | TsTypeArrayDef | TsTypeTupleDef | TsTypeTypeOperatorDef | TsTypeParenthesizedDef | TsTypeRestDef | TsTypeOptionalDef | TsTypeQueryDef | TsTypeThisDef | TsTypeFnOrConstructorDef | TsTypeConditionalDef | TsTypeImportTypeDef | TsTypeInferDef | TsTypeIndexedAccessDef | TsTypeMappedDef | TsTypeTypeLiteralDef | TsTypeTypePredicateDef;
interface TsTypeDefBase {
  repr: string;
  kind: TsTypeDefKind;
}
interface TsTypeKeywordDef extends TsTypeDefBase {
  kind: "keyword";
  keyword: string;
}
interface TsTypeDefLiteral extends TsTypeDefBase {
  kind: "literal";
  literal: LiteralDef;
}
interface TsTypeTypeRefDef extends TsTypeDefBase {
  kind: "typeRef";
  typeRef: TsTypeRefDef;
}
interface TsTypeUnionDef extends TsTypeDefBase {
  kind: "union";
  union: TsTypeDef[];
}
interface TsTypeIntersectionDef extends TsTypeDefBase {
  kind: "intersection";
  intersection: TsTypeDef[];
}
interface TsTypeArrayDef extends TsTypeDefBase {
  kind: "array";
  array: TsTypeDef;
}
interface TsTypeTupleDef extends TsTypeDefBase {
  kind: "tuple";
  tuple: TsTypeDef[];
}
interface TsTypeTypeOperatorDef extends TsTypeDefBase {
  kind: "typeOperator";
  typeOperator: TsTypeOperatorDef;
}
interface TsTypeParenthesizedDef extends TsTypeDefBase {
  kind: "parenthesized";
  parenthesized: TsTypeDef;
}
interface TsTypeRestDef extends TsTypeDefBase {
  kind: "rest";
  rest: TsTypeDef;
}
interface TsTypeOptionalDef extends TsTypeDefBase {
  kind: "optional";
  optional: TsTypeDef;
}
interface TsTypeQueryDef extends TsTypeDefBase {
  kind: "typeQuery";
  typeQuery: string;
}
interface TsTypeThisDef extends TsTypeDefBase {
  kind: "this";
  this: boolean;
}
interface TsTypeFnOrConstructorDef extends TsTypeDefBase {
  kind: "fnOrConstructor";
  fnOrConstructor: TsFnOrConstructorDef;
}
interface TsTypeConditionalDef extends TsTypeDefBase {
  kind: "conditional";
  conditionalType: TsConditionalDef;
}
interface TsTypeInferDef extends TsTypeDefBase {
  kind: "infer";
  infer: TsInferDef;
}
interface TsTypeMappedDef extends TsTypeDefBase {
  kind: "mapped";
  mappedType: TsMappedTypeDef;
}
interface TsTypeImportTypeDef extends TsTypeDefBase {
  kind: "importType";
  importType: TsImportTypeDef;
}
interface TsTypeIndexedAccessDef extends TsTypeDefBase {
  kind: "indexedAccess";
  indexedAccess: TsIndexedAccessDef;
}
interface TsTypeTypeLiteralDef extends TsTypeDefBase {
  kind: "typeLiteral";
  typeLiteral: TsTypeLiteralDef;
}
interface TsTypeTypePredicateDef extends TsTypeDefBase {
  kind: "typePredicate";
  typePredicate: TsTypePredicateDef;
}
type TsTypeDefKind = "keyword" | "literal" | "typeRef" | "union" | "intersection" | "array" | "tuple" | "typeOperator" | "parenthesized" | "rest" | "optional" | "typeQuery" | "this" | "fnOrConstructor" | "conditional" | "importType" | "infer" | "indexedAccess" | "mapped" | "typeLiteral" | "typePredicate";
interface TsTypeRefDef {
  typeParams?: TsTypeDef[];
  typeName: string;
}
interface TypeAliasDef {
  tsType: TsTypeDef;
  typeParams: TsTypeParamDef[];
}
type VariableDeclKind = "var" | "let" | "const";
interface VariableDef {
  tsType?: TsTypeDef;
  kind: VariableDeclKind;
}
//#endregion
//#region node_modules/.pnpm/@jsr+deno__doc@0.193.0_patch_hash=9e2413364fbb4f82b21f084dbf3abb5df6b03eb5344ffd581b6d7dec1be5af3e/node_modules/@jsr/deno__doc/html_types.d.ts
// Copyright 2018-2025 the Deno authors. All rights reserved. MIT license.
interface HtmlHeadCtx {
  title: string;
  current_file: string;
  stylesheet_url: string;
  page_stylesheet_url: string;
  reset_stylesheet_url: string;
  url_search_index: string;
  script_js: string;
  fuse_js: string;
  url_search: string;
  head_inject: string | null;
  disable_search: boolean;
}
interface CategoriesPanelCtx {
  categories: CategoriesPanelCategoryCtx[];
  all_symbols_href: string;
  total_symbols: number;
}
interface CategoriesPanelCategoryCtx {
  name: string;
  href: string;
  active: boolean;
}
type Page = IndexCtx | AllSymbolsPageCtx | SymbolPageCtx | Redirect | Search;
interface PageBase {
  kind: "IndexCtx" | "AllSymbolsPageCtx" | "SymbolPageCtx";
  html_head_ctx: HtmlHeadCtx;
  disable_search: boolean;
  categories_panel: CategoriesPanelCtx | null;
  breadcrumbs_ctx: BreadcrumbsCtx;
}
interface IndexCtx extends PageBase {
  kind: "IndexCtx";
  overview: SymbolContentCtx | null;
  module_doc: ModuleDocCtx | null;
  usage: UsagesCtx | null;
  toc_ctx: ToCCtx;
}
interface AllSymbolsPageCtx extends PageBase {
  kind: "AllSymbolsPageCtx";
  content: AllSymbolsCtx;
}
interface AllSymbolsCtx {
  entrypoints: AllSymbolsItemCtx[];
}
interface AllSymbolsItemCtx {
  name: string;
  href: string;
  module_doc: ModuleDocCtx;
}
interface SymbolPageCtx extends PageBase {
  kind: "SymbolPageCtx";
  symbol_group_ctx: SymbolGroupCtx;
  toc_ctx: ToCCtx;
}
interface Redirect {
  kind: "redirect";
  path: string;
}
interface Search {
  kind: "search";
  path: SearchIndexNode[];
}
interface SlimKindCtx {
  char: string;
  kind: string;
  title: string;
}
interface SearchIndexNode {
  kind: SlimKindCtx[];
  name: string;
  file: string;
  doc: string;
  url: string;
  category?: string;
  deprecated: boolean;
}
interface ToCCtx {
  usages: UsagesCtx | null;
  top_symbols: TopSymbolsCtx | null;
  document_navigation_str: string | null;
  document_navigation: ToCEntry[];
}
interface ToCEntry {
  level: number;
  content: string;
  anchor: string;
}
interface UsagesCtx {
  usages: UsageCtx[];
  composed: boolean;
}
interface UsageCtx {
  name: string;
  content: string;
  icon: string | null;
  additional_css: string;
}
interface BreadcrumbsCtx {
  root: BreadcrumbCtx;
  current_entrypoint: BreadcrumbCtx | null;
  entrypoints: BreadcrumbCtx[];
  symbol: BreadcrumbCtx[];
}
interface BreadcrumbCtx {
  name: string;
  href: string;
}
interface TopSymbolsCtx {
  symbols: TopSymbolCtx[];
  total_symbols: number;
  all_symbols_href: string;
}
interface TopSymbolCtx {
  kind: DocNodeKindCtx[];
  name: string;
  href: string;
}
interface ModuleDocCtx {
  deprecated: string | null;
  sections: SymbolContentCtx;
}
interface DocNodeKindCtx {
  kind: string;
  char: string;
  title: string;
  title_lowercase: string;
  title_plural: string;
}
interface SymbolContentCtx {
  id: string;
  docs: string | null;
  sections: SectionCtx[];
}
interface SectionCtx {
  header: SectionHeaderCtx | null;
  content: SectionContentCtx;
}
interface SectionHeaderCtx {
  title: string;
  anchor: AnchorCtx;
  href: string | null;
  doc: string | null;
}
interface AnchorCtx {
  id: string;
}
interface SymbolGroupCtx {
  name: string;
  symbols: SymbolCtx[];
}
interface SymbolCtx {
  kind: DocNodeKindCtx;
  usage: UsagesCtx | null;
  tags: Tag[];
  subtitle: DocBlockSubtitleCtx | null;
  content: SymbolInnerCtx[];
  deprecated: string | null;
  source_href: string | null;
}
type DocBlockSubtitleCtx = DocBlockSubtitleClassCtx | DocBlockSubtitleInterfaceCtx;
interface DocBlockSubtitleClassCtx {
  kind: "class";
  value: DocBlockSubtitleClassValueCtx;
}
interface DocBlockSubtitleClassValueCtx {
  implements: string[] | null;
  extends: DocBlockClassSubtitleExtendsCtx | null;
}
interface DocBlockClassSubtitleExtendsCtx {
  href: string | null;
  symbol: string;
  type_args: string;
}
interface DocBlockSubtitleInterfaceCtx {
  kind: "interface";
  value: DocBlockSubtitleInterfaceValueCtx;
}
interface DocBlockSubtitleInterfaceValueCtx {
  extends: string[];
}
type SymbolInnerCtx = SymbolInnerFunctionCtx | SymbolInnerOtherCtx;
interface SymbolInnerFunctionCtx {
  kind: "function";
  value: FunctionCtx;
}
interface SymbolInnerOtherCtx {
  kind: "other";
  value: SymbolContentCtx;
}
interface FunctionCtx {
  functions: OverloadRenderCtx[];
}
interface OverloadRenderCtx {
  id: string;
  anchor: AnchorCtx;
  name: string;
  summary: string;
  deprecated: string | null;
  content: SymbolContentCtx;
}
type SectionContentCtx = SectionContentDocEntryCtx | SectionContentExampleCtx | SectionContentIndexSignatureCtx | SectionContentNamespaceSectionCtx | SectionContentNamespaceSeeCtx | SectionContentEmptyCtx;
interface SectionContentDocEntryCtx {
  kind: "doc_entry";
  content: DocEntryCtx[];
}
interface SectionContentExampleCtx {
  kind: "example";
  content: ExampleCtx[];
}
interface SectionContentIndexSignatureCtx {
  kind: "index_signature";
  content: IndexSignatureCtx[];
}
interface SectionContentNamespaceSectionCtx {
  kind: "namespace_section";
  content: NamespaceNodeCtx[];
}
interface SectionContentNamespaceSeeCtx {
  kind: "see";
  content: string[];
}
interface SectionContentEmptyCtx {
  kind: "empty";
}
interface DocEntryCtx {
  id: string;
  name: string | null;
  name_href: string | null;
  content: string;
  anchor: AnchorCtx;
  tags: Tag[];
  js_doc: string | null;
  source_href: string | null;
}
interface ExampleCtx {
  anchor: AnchorCtx;
  id: string;
  title: string;
  markdown_title: string;
  markdown_body: string;
}
interface IndexSignatureCtx {
  id: string;
  anchor: AnchorCtx;
  readonly: boolean;
  params: string;
  ts_type: string;
  source_href: string | null;
}
interface NamespaceNodeCtx {
  id: string;
  anchor: AnchorCtx;
  tags: Tag[];
  doc_node_kind_ctx: DocNodeKindCtx[];
  href: string;
  name: string;
  ty: TypeSummaryCtx | null;
  docs: string | null;
  deprecated: boolean;
  subitems: NamespaceNodeSubItemCtx[];
}
interface NamespaceNodeSubItemCtx {
  title: string;
  docs: string | null;
  ty: TypeSummaryCtx | null;
  href: string;
}
interface TypeSummaryCtx {
  ty: string;
  info: string | null;
}
type Tag = TagNew | TagAbstract | TagDeprecated | TagWriteonly | TagReadonly | TagProtected | TagPrivate | TagOptional | TagUnstable | TagPermissions | TagOther;
interface TagNew {
  kind: "new";
}
interface TagAbstract {
  kind: "abstract";
}
interface TagDeprecated {
  kind: "deprecated";
}
interface TagWriteonly {
  kind: "writeonly";
}
interface TagReadonly {
  kind: "readonly";
}
interface TagProtected {
  kind: "protected";
}
interface TagPrivate {
  kind: "private";
}
interface TagOptional {
  kind: "optional";
}
interface TagUnstable {
  kind: "unstable";
}
interface TagPermissions {
  kind: "permissions";
  value: string[];
}
interface TagOther {
  kind: "other";
  value: string;
}
//#endregion
//#region node_modules/.pnpm/@jsr+deno__graph@0.100.1/node_modules/@jsr/deno__graph/_dist/types.d.ts
interface LoadResponseModule {
  /** A module with code has been loaded. */
  kind: "module";
  /** The string URL of the resource. If there were redirects, the final
   * specifier should be set here, otherwise the requested specifier. */
  specifier: string;
  /** For remote resources, a record of headers should be set, where the key's
   * have been normalized to be lower case values. */
  headers?: Record<string, string>;
  /** The string value of the loaded resources. */
  content: string | Uint8Array;
}
interface LoadResponseRedirect {
  /** A redirect occurred */
  kind: "redirect";
  /** The redirected specifier. */
  specifier: string;
}
interface LoadResponseExternal {
  /** The loaded module is either _external_ or _built-in_ to the runtime. */
  kind: "external";
  /** The string URL of the resource. If there were redirects, the final
   * specifier should be set here, otherwise the requested specifier. */
  specifier: string;
}
type LoadResponse = LoadResponseModule | LoadResponseRedirect | LoadResponseExternal;
//#endregion
//#region node_modules/.pnpm/@jsr+deno__graph@0.100.1/node_modules/@jsr/deno__graph/_dist/mod.d.ts
type CacheSetting = "only" | "use" | "reload";
//#endregion
//#region node_modules/.pnpm/@jsr+deno__doc@0.193.0_patch_hash=9e2413364fbb4f82b21f084dbf3abb5df6b03eb5344ffd581b6d7dec1be5af3e/node_modules/@jsr/deno__doc/_dist/mod.d.ts
interface DocOptions {
  /** An optional URL string which provides a location of an import map to be
   * loaded and used to resolve module specifiers. This should be an absolute
   * value.
   *
   * When a `resolve()` function is also specified, a warning will be issued
   * and the import map will be used instead of the `resolve()` function. */
  importMap?: string;
  /** Print import map diagnostics.
   *
   * @default {true}
   */
  printImportMapDiagnostics?: boolean;
  /** If `true` include all documentation nodes in the output, included private
   * (non-exported) nodes. The default is `false`.  Use the `declarationKind`
   * of the `DocNode` to determine if the doc node is private, exported,
   * imported, or declared. */
  includeAll?: boolean;
  /**
   * An optional callback that is called with the URL string of the resource to
   * be loaded and a flag indicating if the module was required dynamically. The
   * callback should resolve with a `LoadResponse` or `undefined` if the module
   * is not found. If there are other errors encountered, a rejected promise
   * should be returned.
   *
   * This defaults to a load function which will use `fetch()` and
   * `Deno.readFile()` to load modules, and requires the appropriate permissions
   * to function. If the permissions are note available at startup, the default
   * function will prompt for them.
   *
   * @param specifier The URL string of the resource to be loaded and resolved
   * @param isDynamic A flag that indicates if the module was being loaded
   *                  dynamically
   */
  load?(specifier: string, isDynamic?: boolean, cacheSetting?: CacheSetting, checksum?: string): Promise<LoadResponse | undefined>;
  /** An optional callback that allows the default resolution logic of the
   * module graph to be "overridden". This is intended to allow items like an
   * import map to be used with the module graph. The callback takes the string
   * of the module specifier from the referrer and the string URL of the
   * referrer. The callback then returns a resolved URL string specifier.
   *
   * When an `importMap` URL string and this method is specifier, a warning
   * will be issued and the import map will be used. */
  resolve?(specifier: string, referrer: string): string;
}
/**
 * Generate asynchronously an array of documentation nodes for the supplied
 * module.
 *
 * ### Example
 *
 * ```ts
 * import { doc } from "https://deno.land/x/deno_doc/mod.ts";
 *
 * const entries = await doc(["https://deno.land/std/fmt/colors.ts"]);
 *
 * for (const entry of entries) {
 *   console.log(`name: ${entry.name} kind: ${entry.kind}`);
 * }
 * ```
 *
 * @param specifiers List of the URL strings of the specifiers to document
 * @param options A set of options for generating the documentation
 * @returns A promise that resolves with an array of documentation nodes
 */
declare function doc(specifiers: string[], options?: DocOptions): Promise<Record<string, Array<DocNode>>>;
interface ShortPath {
  /** Name identifier for the path. */
  path: string;
  /** URL for the path. */
  specifier: string;
  /** Whether the path is the main entrypoint. */
  isMain: boolean;
}
interface UrlResolveKindRoot {
  kind: "root";
}
interface UrlResolveKindAllSymbols {
  kind: "allSymbols";
}
interface UrlResolveKindCategory {
  kind: "category";
  category: string;
}
interface UrlResolveKindFile {
  kind: "file";
  file: ShortPath;
}
interface UrlResolveKindSymbol {
  kind: "symbol";
  file: ShortPath;
  symbol: string;
}
type UrlResolveKind = UrlResolveKindRoot | UrlResolveKindAllSymbols | UrlResolveKindCategory | UrlResolveKindFile | UrlResolveKindSymbol;
interface HrefResolver {
  /** Resolver for how files should link to each other. */
  resolvePath?(current: UrlResolveKind, target: UrlResolveKind, defaultResolve: () => string): string;
  /** Resolver for global symbols, like the Deno namespace or other built-ins */
  resolveGlobalSymbol?(symbol: string[]): string | undefined;
  /** Resolver for symbols from non-relative imports */
  resolveImportHref?(symbol: string[], src: string): string | undefined;
  /** Resolve the URL used in source code link buttons. */
  resolveSource?(location: Location): string | undefined;
  /**
   * Resolve external JSDoc module links.
   * Returns a tuple with link and title.
   */
  resolveExternalJsdocModule?(module: string, symbol?: string): {
    link: string;
    title: string;
  } | undefined;
}
interface UsageComposerEntry {
  /** Name for the entry. Can be left blank in singleMode. */
  name: string;
  /** Icon for the entry. */
  icon?: string;
}
type UsageToMd = (url: string, customFileIdentifier: string | undefined) => string;
interface UsageComposer {
  /** Whether the usage should only display a single item and not have a dropdown. */
  singleMode: boolean;
  /**
   * Composer to generate usage.
   *
   * @param currentResolve The current resolve.
   * @param usageToMd Callback to generate a usage import block.
   */
  compose(currentResolve: UrlResolveKind, usageToMd: UsageToMd): Map<UsageComposerEntry, string>;
}
interface GenerateOptions {
  /** The name of the package to use in the breadcrumbs. */
  packageName?: string;
  /** The main entrypoint if one is present. */
  mainEntrypoint?: string;
  /** Composer for generating the usage of a symbol of module. */
  usageComposer?: UsageComposer;
  /** Resolver for how links should be resolved. */
  hrefResolver?: HrefResolver;
  /** Map for remapping module names to a custom value. */
  rewriteMap?: Record<string, string>;
  /**
   * Map of categories to their markdown description.
   * Only usable in category mode (single d.ts file with categories declared).
   */
  categoryDocs?: Record<string, string | undefined>;
  /** Whether to disable search. */
  disableSearch?: boolean;
  /**
   * Map of modules, where the value is a map of symbols with value of a link to
   * where this symbol should redirect to.
   */
  symbolRedirectMap?: Record<string, Record<string, string>>;
  /**
   * Map of modules, where the value is what the name of the default symbol should be.
   */
  defaultSymbolMap?: Record<string, string>;
  /**
   * Hook to inject content in the `head` tag.
   *
   * @param root the path to the root of the output.
   */
  headInject?(root: string): string;
  /**
   * Function to render markdown.
   *
   * @param md The raw markdown that needs to be rendered.
   * @param titleOnly Whether only the title should be rendered. Recommended syntax to keep is:
   * - paragraph
   * - heading
   * - text
   * - code
   * - html inline
   * - emph
   * - strong
   * - strikethrough
   * - superscript
   * - link
   * - math
   * - escaped
   * - wiki link
   * - underline
   * - soft break
   * @param filePath The filepath where the rendering is happening.
   * @param anchorizer Anchorizer used to generate slugs and the sidebar.
   * @return The rendered markdown.
   */
  markdownRenderer(md: string, titleOnly: boolean, filePath: ShortPath | undefined, anchorizer: (content: string, depthLevel: number) => string): string | undefined;
  /** Function to strip markdown. */
  markdownStripper(md: string): string;
  /** Prefix for IDs of elements. */
  idPrefix?: string;
}
/**
 * Generate HTML files for provided {@linkcode DocNode}s.
 * @param docNodesByUrl DocNodes keyed by their absolute URL.
 * @param options Options for the generation.
 */
declare function generateHtml(docNodesByUrl: Record<string, Array<DocNode>>, options: GenerateOptions): Promise<Record<string, string>>;
/**
 * Generate JSON data equivalent to the HTML files generated by {@linkcode generateHtml}.
 * @param docNodesByUrl DocNodes keyed by their absolute URL.
 * @param options Options for the generation.
 */
declare function generateHtmlAsJSON(docNodesByUrl: Record<string, Array<DocNode>>, options: GenerateOptions): Promise<Record<string, Page>>;
//#endregion
export { Accessibility, AllSymbolsCtx, AllSymbolsItemCtx, AllSymbolsPageCtx, AnchorCtx, BreadcrumbCtx, BreadcrumbsCtx, type CacheSetting, CategoriesPanelCategoryCtx, CategoriesPanelCtx, ClassConstructorDef, ClassConstructorParamDef, ClassDef, ClassIndexSignatureDef, ClassMethodDef, ClassPropertyDef, DeclarationKind, DecoratorDef, DocBlockClassSubtitleExtendsCtx, DocBlockSubtitleClassCtx, DocBlockSubtitleClassValueCtx, DocBlockSubtitleCtx, DocBlockSubtitleInterfaceCtx, DocBlockSubtitleInterfaceValueCtx, DocEntryCtx, DocNode, DocNodeClass, DocNodeEnum, DocNodeFunction, DocNodeImport, DocNodeInterface, DocNodeKind, DocNodeKindCtx, DocNodeModuleDoc, DocNodeNamespace, DocNodeReference, DocNodeTypeAlias, DocNodeVariable, DocOptions, EnumDef, EnumMemberDef, ExampleCtx, FunctionCtx, FunctionDef, GenerateOptions, HrefResolver, HtmlHeadCtx, ImportDef, IndexCtx, IndexSignatureCtx, InterfaceCallSignatureDef, InterfaceDef, InterfaceIndexSignatureDef, InterfaceMethodDef, InterfacePropertyDef, JsDoc, JsDocTag, JsDocTagBase, JsDocTagDoc, JsDocTagDocRequired, JsDocTagKind, JsDocTagModule, JsDocTagNamed, JsDocTagNamedTyped, JsDocTagOnly, JsDocTagParam, JsDocTagReturn, JsDocTagTags, JsDocTagThrows, JsDocTagTyped, JsDocTagUnsupported, JsDocTagValued, LiteralCallSignatureDef, LiteralDef, LiteralDefBigInt, LiteralDefBoolean, LiteralDefKind, LiteralDefNumber, LiteralDefString, LiteralDefTemplate, LiteralIndexSignatureDef, LiteralMethodDef, LiteralPropertyDef, type LoadResponse, Location, MethodKind, ModuleDocCtx, NamespaceDef, NamespaceNodeCtx, NamespaceNodeSubItemCtx, ObjectPatPropAssignDef, ObjectPatPropDef, ObjectPatPropKeyValueDef, ObjectPatPropRestDef, OverloadRenderCtx, Page, PageBase, ParamArrayDef, ParamAssignDef, ParamDef, ParamIdentifierDef, ParamObjectDef, ParamRestDef, Redirect, ReferenceDef, Search, SearchIndexNode, SectionContentCtx, SectionContentDocEntryCtx, SectionContentEmptyCtx, SectionContentExampleCtx, SectionContentIndexSignatureCtx, SectionContentNamespaceSectionCtx, SectionContentNamespaceSeeCtx, SectionCtx, SectionHeaderCtx, ShortPath, SlimKindCtx, SymbolContentCtx, SymbolCtx, SymbolGroupCtx, SymbolInnerCtx, SymbolInnerFunctionCtx, SymbolInnerOtherCtx, SymbolPageCtx, Tag, TagAbstract, TagDeprecated, TagNew, TagOptional, TagOther, TagPermissions, TagPrivate, TagProtected, TagReadonly, TagUnstable, TagWriteonly, ToCCtx, ToCEntry, TopSymbolCtx, TopSymbolsCtx, TruePlusMinus, TsConditionalDef, TsFnOrConstructorDef, TsImportTypeDef, TsIndexedAccessDef, TsInferDef, TsMappedTypeDef, TsTypeArrayDef, TsTypeConditionalDef, TsTypeDef, TsTypeDefKind, TsTypeDefLiteral, TsTypeFnOrConstructorDef, TsTypeImportTypeDef, TsTypeIndexedAccessDef, TsTypeInferDef, TsTypeIntersectionDef, TsTypeKeywordDef, TsTypeLiteralDef, TsTypeMappedDef, TsTypeOperatorDef, TsTypeOptionalDef, TsTypeParamDef, TsTypeParenthesizedDef, TsTypePredicateDef, TsTypeQueryDef, TsTypeRefDef, TsTypeRestDef, TsTypeThisDef, TsTypeTupleDef, TsTypeTypeLiteralDef, TsTypeTypeOperatorDef, TsTypeTypePredicateDef, TsTypeTypeRefDef, TsTypeUnionDef, TypeAliasDef, TypeSummaryCtx, UrlResolveKind, UrlResolveKindAllSymbols, UrlResolveKindCategory, UrlResolveKindFile, UrlResolveKindRoot, UrlResolveKindSymbol, UsageComposer, UsageComposerEntry, UsageCtx, UsageToMd, UsagesCtx, VariableDeclKind, VariableDef, doc, generateHtml, generateHtmlAsJSON };