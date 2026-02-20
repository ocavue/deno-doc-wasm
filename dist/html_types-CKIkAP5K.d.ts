//#region node_modules/.pnpm/@jsr+deno__doc@0.193.0_patch_hash=00a71c067c8ba1d88a98e37be234632ebfaf4f244bc6332903680367001590f2/node_modules/@jsr/deno__doc/types.d.ts
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
//#region node_modules/.pnpm/@jsr+deno__doc@0.193.0_patch_hash=00a71c067c8ba1d88a98e37be234632ebfaf4f244bc6332903680367001590f2/node_modules/@jsr/deno__doc/html_types.d.ts
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
export { TagOther as $, TsTypeParamDef as $n, JsDocTagParam as $t, SearchIndexNode as A, ReferenceDef as An, DocNodeNamespace as At, SlimKindCtx as B, TsTypeDef as Bn, InterfaceIndexSignatureDef as Bt, NamespaceNodeCtx as C, ObjectPatPropRestDef as Cn, DocNodeClass as Ct, PageBase as D, ParamIdentifierDef as Dn, DocNodeInterface as Dt, Page as E, ParamDef as En, DocNodeImport as Et, SectionContentIndexSignatureCtx as F, TsIndexedAccessDef as Fn, EnumMemberDef as Ft, SymbolInnerFunctionCtx as G, TsTypeIndexedAccessDef as Gn, JsDocTagBase as Gt, SymbolCtx as H, TsTypeDefLiteral as Hn, InterfacePropertyDef as Ht, SectionContentNamespaceSectionCtx as I, TsInferDef as In, FunctionDef as It, Tag as J, TsTypeKeywordDef as Jn, JsDocTagKind as Jt, SymbolInnerOtherCtx as K, TsTypeInferDef as Kn, JsDocTagDoc as Kt, SectionContentNamespaceSeeCtx as L, TsMappedTypeDef as Ln, ImportDef as Lt, SectionContentDocEntryCtx as M, TsConditionalDef as Mn, DocNodeTypeAlias as Mt, SectionContentEmptyCtx as N, TsFnOrConstructorDef as Nn, DocNodeVariable as Nt, Redirect as O, ParamObjectDef as On, DocNodeKind as Ot, SectionContentExampleCtx as P, TsImportTypeDef as Pn, EnumDef as Pt, TagOptional as Q, TsTypeOptionalDef as Qn, JsDocTagOnly as Qt, SectionCtx as R, TsTypeArrayDef as Rn, InterfaceCallSignatureDef as Rt, ModuleDocCtx as S, ObjectPatPropKeyValueDef as Sn, DocNode as St, OverloadRenderCtx as T, ParamAssignDef as Tn, DocNodeFunction as Tt, SymbolGroupCtx as U, TsTypeFnOrConstructorDef as Un, JsDoc as Ut, SymbolContentCtx as V, TsTypeDefKind as Vn, InterfaceMethodDef as Vt, SymbolInnerCtx as W, TsTypeImportTypeDef as Wn, JsDocTag as Wt, TagDeprecated as X, TsTypeMappedDef as Xn, JsDocTagNamed as Xt, TagAbstract as Y, TsTypeLiteralDef as Yn, JsDocTagModule as Yt, TagNew as Z, TsTypeOperatorDef as Zn, JsDocTagNamedTyped as Zt, ExampleCtx as _, Location as _n, ClassIndexSignatureDef as _t, BreadcrumbCtx as a, JsDocTagValued as an, TsTypeThisDef as ar, TagWriteonly as at, IndexCtx as b, ObjectPatPropAssignDef as bn, DeclarationKind as bt, CategoriesPanelCtx as c, LiteralDefBigInt as cn, TsTypeTypeOperatorDef as cr, TopSymbolCtx as ct, DocBlockSubtitleClassValueCtx as d, LiteralDefNumber as dn, TsTypeUnionDef as dr, UsageCtx as dt, JsDocTagReturn as en, TsTypeParenthesizedDef as er, TagPermissions as et, DocBlockSubtitleCtx as f, LiteralDefString as fn, TypeAliasDef as fr, UsagesCtx as ft, DocNodeKindCtx as g, LiteralPropertyDef as gn, ClassDef as gt, DocEntryCtx as h, LiteralMethodDef as hn, ClassConstructorParamDef as ht, AnchorCtx as i, JsDocTagUnsupported as in, TsTypeRestDef as ir, TagUnstable as it, SectionContentCtx as j, TruePlusMinus as jn, DocNodeReference as jt, Search as k, ParamRestDef as kn, DocNodeModuleDoc as kt, DocBlockClassSubtitleExtendsCtx as l, LiteralDefBoolean as ln, TsTypeTypePredicateDef as lr, TopSymbolsCtx as lt, DocBlockSubtitleInterfaceValueCtx as m, LiteralIndexSignatureDef as mn, VariableDef as mr, ClassConstructorDef as mt, AllSymbolsItemCtx as n, JsDocTagThrows as nn, TsTypeQueryDef as nr, TagProtected as nt, BreadcrumbsCtx as o, LiteralCallSignatureDef as on, TsTypeTupleDef as or, ToCCtx as ot, DocBlockSubtitleInterfaceCtx as p, LiteralDefTemplate as pn, VariableDeclKind as pr, Accessibility as pt, SymbolPageCtx as q, TsTypeIntersectionDef as qn, JsDocTagDocRequired as qt, AllSymbolsPageCtx as r, JsDocTagTyped as rn, TsTypeRefDef as rr, TagReadonly as rt, CategoriesPanelCategoryCtx as s, LiteralDef as sn, TsTypeTypeLiteralDef as sr, ToCEntry as st, AllSymbolsCtx as t, JsDocTagTags as tn, TsTypePredicateDef as tr, TagPrivate as tt, DocBlockSubtitleClassCtx as u, LiteralDefKind as un, TsTypeTypeRefDef as ur, TypeSummaryCtx as ut, FunctionCtx as v, MethodKind as vn, ClassMethodDef as vt, NamespaceNodeSubItemCtx as w, ParamArrayDef as wn, DocNodeEnum as wt, IndexSignatureCtx as x, ObjectPatPropDef as xn, DecoratorDef as xt, HtmlHeadCtx as y, NamespaceDef as yn, ClassPropertyDef as yt, SectionHeaderCtx as z, TsTypeConditionalDef as zn, InterfaceDef as zt };