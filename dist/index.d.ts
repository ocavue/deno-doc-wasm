import { $ as TagOther, $n as TsTypeParamDef, $t as JsDocTagParam, A as SearchIndexNode, An as ReferenceDef, At as DocNodeNamespace, B as SlimKindCtx, Bn as TsTypeDef, Bt as InterfaceIndexSignatureDef, C as NamespaceNodeCtx, Cn as ObjectPatPropRestDef, Ct as DocNodeClass, D as PageBase, Dn as ParamIdentifierDef, Dt as DocNodeInterface, E as Page, En as ParamDef, Et as DocNodeImport, F as SectionContentIndexSignatureCtx, Fn as TsIndexedAccessDef, Ft as EnumMemberDef, G as SymbolInnerFunctionCtx, Gn as TsTypeIndexedAccessDef, Gt as JsDocTagBase, H as SymbolCtx, Hn as TsTypeDefLiteral, Ht as InterfacePropertyDef, I as SectionContentNamespaceSectionCtx, In as TsInferDef, It as FunctionDef, J as Tag, Jn as TsTypeKeywordDef, Jt as JsDocTagKind, K as SymbolInnerOtherCtx, Kn as TsTypeInferDef, Kt as JsDocTagDoc, L as SectionContentNamespaceSeeCtx, Ln as TsMappedTypeDef, Lt as ImportDef, M as SectionContentDocEntryCtx, Mn as TsConditionalDef, Mt as DocNodeTypeAlias, N as SectionContentEmptyCtx, Nn as TsFnOrConstructorDef, Nt as DocNodeVariable, O as Redirect, On as ParamObjectDef, Ot as DocNodeKind, P as SectionContentExampleCtx, Pn as TsImportTypeDef, Pt as EnumDef, Q as TagOptional, Qn as TsTypeOptionalDef, Qt as JsDocTagOnly, R as SectionCtx, Rn as TsTypeArrayDef, Rt as InterfaceCallSignatureDef, S as ModuleDocCtx, Sn as ObjectPatPropKeyValueDef, St as DocNode, T as OverloadRenderCtx, Tn as ParamAssignDef, Tt as DocNodeFunction, U as SymbolGroupCtx, Un as TsTypeFnOrConstructorDef, Ut as JsDoc, V as SymbolContentCtx, Vn as TsTypeDefKind, Vt as InterfaceMethodDef, W as SymbolInnerCtx, Wn as TsTypeImportTypeDef, Wt as JsDocTag, X as TagDeprecated, Xn as TsTypeMappedDef, Xt as JsDocTagNamed, Y as TagAbstract, Yn as TsTypeLiteralDef, Yt as JsDocTagModule, Z as TagNew, Zn as TsTypeOperatorDef, Zt as JsDocTagNamedTyped, _ as ExampleCtx, _n as Location, _t as ClassIndexSignatureDef, a as BreadcrumbCtx, an as JsDocTagValued, ar as TsTypeThisDef, at as TagWriteonly, b as IndexCtx, bn as ObjectPatPropAssignDef, bt as DeclarationKind, c as CategoriesPanelCtx, cn as LiteralDefBigInt, cr as TsTypeTypeOperatorDef, ct as TopSymbolCtx, d as DocBlockSubtitleClassValueCtx, dn as LiteralDefNumber, dr as TsTypeUnionDef, dt as UsageCtx, en as JsDocTagReturn, er as TsTypeParenthesizedDef, et as TagPermissions, f as DocBlockSubtitleCtx, fn as LiteralDefString, fr as TypeAliasDef, ft as UsagesCtx, g as DocNodeKindCtx, gn as LiteralPropertyDef, gt as ClassDef, h as DocEntryCtx, hn as LiteralMethodDef, ht as ClassConstructorParamDef, i as AnchorCtx, in as JsDocTagUnsupported, ir as TsTypeRestDef, it as TagUnstable, j as SectionContentCtx, jn as TruePlusMinus, jt as DocNodeReference, k as Search, kn as ParamRestDef, kt as DocNodeModuleDoc, l as DocBlockClassSubtitleExtendsCtx, ln as LiteralDefBoolean, lr as TsTypeTypePredicateDef, lt as TopSymbolsCtx, m as DocBlockSubtitleInterfaceValueCtx, mn as LiteralIndexSignatureDef, mr as VariableDef, mt as ClassConstructorDef, n as AllSymbolsItemCtx, nn as JsDocTagThrows, nr as TsTypeQueryDef, nt as TagProtected, o as BreadcrumbsCtx, on as LiteralCallSignatureDef, or as TsTypeTupleDef, ot as ToCCtx, p as DocBlockSubtitleInterfaceCtx, pn as LiteralDefTemplate, pr as VariableDeclKind, pt as Accessibility, q as SymbolPageCtx, qn as TsTypeIntersectionDef, qt as JsDocTagDocRequired, r as AllSymbolsPageCtx, rn as JsDocTagTyped, rr as TsTypeRefDef, rt as TagReadonly, s as CategoriesPanelCategoryCtx, sn as LiteralDef, sr as TsTypeTypeLiteralDef, st as ToCEntry, t as AllSymbolsCtx, tn as JsDocTagTags, tr as TsTypePredicateDef, tt as TagPrivate, u as DocBlockSubtitleClassCtx, un as LiteralDefKind, ur as TsTypeTypeRefDef, ut as TypeSummaryCtx, v as FunctionCtx, vn as MethodKind, vt as ClassMethodDef, w as NamespaceNodeSubItemCtx, wn as ParamArrayDef, wt as DocNodeEnum, x as IndexSignatureCtx, xn as ObjectPatPropDef, xt as DecoratorDef, y as HtmlHeadCtx, yn as NamespaceDef, yt as ClassPropertyDef, z as SectionHeaderCtx, zn as TsTypeConditionalDef, zt as InterfaceDef } from "./html_types-CKIkAP5K.js";

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
//#region node_modules/.pnpm/@jsr+deno__doc@0.193.0_patch_hash=00a71c067c8ba1d88a98e37be234632ebfaf4f244bc6332903680367001590f2/node_modules/@jsr/deno__doc/_dist/mod.d.ts
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